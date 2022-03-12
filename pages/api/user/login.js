import nc from "next-connect";
import { userLogin } from "../../../controller/login";


const handler = nc();

handler.post(userLogin)
export default handler;