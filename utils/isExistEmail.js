import { db } from "../db/config";

export const isExistEmail = async (req, res, next) => {
    let data = req.body;
    let user = await db.collection('users').where('email', '==', data.email).get();
    console.log(user.empty);
    if (user.empty) {
        next()
    } else {
        res.status(409).send('email has been used by another user')
    }
}