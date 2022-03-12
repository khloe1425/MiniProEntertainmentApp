import nc from "next-connect";
import { addNewSong, getAllSongsInFavorite, removeSongInList } from "../../../controller/favoriteSongController";
import { isAuth } from "../../../utils/isAuth";

const handler = nc();
handler.use(isAuth)
handler.post(addNewSong)
handler.delete(removeSongInList)
handler.get(getAllSongsInFavorite)
export default handler;