import { db } from "../db/config";

export const addNewSong = async (req, res) => {

    await db.collection('users').doc(req.user.id).collection("favorite").add(req.body)
    res.status(200).send("OK")
}

export const removeSongInList = async (req, res) => {
    let songs = await db.collection('users').doc(req.user.id).collection("favorite").where('id', '==', req.body.id).get();
    if (songs.size === 0) {
        res.status(404).send("Song not found")
    } else {
        const batch = db.batch();
        songs.docs.forEach(doc => {
            batch.delete(doc.ref)
        })
        await batch.commit();
    }
    res.status(200).send("OK")
}
//check if the songs has been added to favorite list
export const songInFavorite = async (req, res) => {
    try {
        let songs = await db.collection('users').doc(req.user.id).collection("favorite").where('id', '==', req.body.id).get();
        if (songs.size === 0) {
            res.status(200).send(false)
        } else {
            res.status(200).send(true)
        }
    } catch (error) {
        res.status(500).send("Something went wrong !")
    }
}

export const getAllSongsInFavorite = async (req, res) => {
    let songs = await db.collection('users').doc(req.user.id).collection("favorite").get();
    
    if (songs.empty) {
        res.status(200).send([])
    } else {
        let songsList = [];
        songs.forEach(song => {
            songsList.push({ songId: song.id, ...song.data() })
        })
        res.status(200).send(songsList)
    }
}