import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../db/config";

export const isAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).send("Invalid Token")
            } else {
                req.user = decode;
                next()
            }
        })
    } else {
        res.status(401).send({ message: 'Token is not suppiled' });
    }
}