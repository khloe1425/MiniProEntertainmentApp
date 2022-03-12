import nc from "next-connect";
import {userLoginWithGoogle } from "../../../controller/login";


const handler = nc();

handler.post(userLoginWithGoogle)
export default handler;