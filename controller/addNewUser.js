import bcrypt from 'bcryptjs';
import { db } from '../db/config';


export const addNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await db.collection('users').add({
            name, email, password: bcrypt.hashSync(password)
        });
        res.status(200).send("success")
    } catch (error) {
        res.status(500).send("Something went wrong")
    }

    // const result = await db.collection('users').doc("rFbLaNczLo5dLCp2bRv7").collection('message').add({
    //     content:"asdasdasdsa"
    // })
    // const result = await db.collection('users').doc('rFbLaNczLo5dLCp2bRv7').get();
    // const result = await db.collection('users/rFbLaNczLo5dLCp2bRv7/message').get();
    // let msg = []
    // result.forEach(doc => {
    //     msg.push({ id: doc.id, data: doc.data().content })
    // })

}

