import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import Player from '../components/player'
import SearchResult from '../components/searchResult'
import { isLogin } from '../utils/auth'
import { Store } from '../utils/store'

export default function Favorite() {
    const { playing, dispatch } = useContext(Store);
    const [favoriteList, setFavoriteList] = useState([])
    const router = useRouter();
    const getFavoriteSongs = async () => {
        let result = await axios({
            method: 'GET',
            url: `/api/songs/favorite-song`,
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        setFavoriteList(result.data)
    }
    useEffect(() => {
        dispatch({
            type: "SET_PLAYING_SONG",
            payload: ""
        })
        if (!isLogin()) {
            router.push('/login')
        } else {
            getFavoriteSongs();
        }

    }, [])
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="app__main">
                <h2>My Favorite Songs</h2>
                <div className={`${favoriteList.length ? "search__result show" : "search__result"}`}>
                    <SearchResult result={favoriteList} />
                </div>
                <Player song={playing} />
            </div>
        </div>
    )
}
Favorite.getLayout = Layout;