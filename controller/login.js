import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';

import jwt from 'jsonwebtoken';
import { db, GOOGLE_CLIENT_KEY, JWT_SECRET } from '../db/config';
const client = new OAuth2Client(GOOGLE_CLIENT_KEY)
const generateToken = (id, email) => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET || JWT_SECRET
    let token = jwt.sign(
        {
            id,
            email
        },

        JWT_SECRET_KEY,
        {
            expiresIn: '3d',
        });
    return token;
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let users = await db.collection('users').where('email', '==', email).get();

        if (users.empty) {
            res.status('404').send("user not found")
        } else {
            let userData = {}
            users.forEach(user => {

                userData = { id: user.id, ...user.data() }
            })
            if (bcrypt.compareSync(password, userData.password)) {
                let token = generateToken(userData.id, userData.email);
                res.status(200).send({ name: userData.name, token })
            } else {
                res.status(401).send("email or password is incorrect")
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}
export const userLoginWithGoogle = async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "120601317207-antrd8qc33vhe0ndig1gg42olb7rabeu.apps.googleusercontent.com",
        });
        const data = ticket.getPayload();
        const { name, email } = data;
        let users = await db.collection('users').where('email', '==', email).get();
        if (users.empty) {
            //chua co tai khoan;
            const newUser = await db.collection('users').add({
                name, email
            });
            let token = generateToken(newUser.id, email)
            res.status(200).send({ name, token })
        } else {
            let userData = {};
            users.forEach(user => {
                userData = { id: user.id, ...user.data() }
            })
            let token = generateToken(userData.id, userData.email)
            res.status(200).send({ name: userData.name, token })
        }
    } catch (error) {
        res.status(500).send("Something went wrong")
    }

}

