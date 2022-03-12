import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
export default function Player({ song }) {
    const [isHeart, setIsHeart] = useState(false);
    const addFavoriteSong = async (song) => {
        await axios({
            method: 'POST',
            url: `/api/songs/favorite-song`,
            data: song,
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    }
    const removeFavoriteSong = async (id) => {
        await axios({
            method: 'DELETE',
            url: `/api/songs/favorite-song`,
            data: {
                id
            },
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    }
    const checkSongInFavarite = async (id) => {
        let result = await axios({
            method: 'POST',
            url: `/api/songs/song-in-favorite`,
            data: {
                id
            },
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (result.data) {
            setIsHeart(true)
        } else {
            setIsHeart(false)
        }
    }

    useEffect(() => {
        if (song.id) {
            checkSongInFavarite(song.id)
        }
    }, [song])
    return (
        <div className="app__player" style={{ backgroundImage: `url(${song.artist ? song.artist.picture_big : "https://logopond.com/logos/c5040bab0e15f542c7da8a127e9ac585.png"})` }}>
            <div className="d-flex justify-content-between align-items-center">
                {Object.keys(song).length ? (
                    <button
                        onClick={() => {
                            setIsHeart(!isHeart)
                            if (!isHeart) {
                                addFavoriteSong(song);
                            } else {
                                removeFavoriteSong(song.id)
                            }
                        }}
                        className="heart__button"
                        key={song.id}
                    >
                        <FontAwesomeIcon icon={faHeart}
                            stroke={'#000'}
                            strokeWidth={'15px'}
                            color={isHeart ? "orange" : "white"} fontSize={'30px'} />
                    </button>
                ) : ""}


                <h2 className="text-warning">{song.title}</h2>
            </div>
            <ReactPlayer url={song.preview ? song.preview : "https://abc.mp3"}
                playing={true}
                controls
                volume={null}
                width={'100%'}
            />
        </div>
    )
}
