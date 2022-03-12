import nc from "next-connect";
import { addNewUser } from "../../../controller/addNewUser";
import { isExistEmail } from "../../../utils/isExistEmail";

const handler = nc();
handler.use(isExistEmail)
handler.post(addNewUser)
export default handler;