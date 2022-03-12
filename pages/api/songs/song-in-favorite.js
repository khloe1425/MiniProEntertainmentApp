import nc from "next-connect";
import { songInFavorite } from "../../../controller/favoriteSongController";
import { isAuth } from "../../../utils/isAuth";

const handler = nc();
handler.use(isAuth)
handler.post(songInFavorite)
export default handler;