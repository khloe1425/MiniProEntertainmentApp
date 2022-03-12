
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Player from "./player";
import SearchResult from "./searchResult";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Store } from "../utils/store";
export default function MainContent() {
    const [showResult, setShowResult] = useState(false);
    const [searchList, setSearchList] = useState([])
    const { playing, dispatch } = useContext(Store)
    const searchSongs = async (params) => {
        let result = await axios({
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: params },
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': '396423ff00mshc42c3ff8a074bbdp17576djsn1ec6ba82e016'
            }
        })
        setSearchList(result.data.data);
        setShowResult(true)
    }
    useEffect(() => {
        dispatch({
            type:"SET_PLAYING_SONG",
            payload:""
        })
    }, [])
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="app__main">
                <div className="app__controls">
                    <div className="app__search">
                        <input type="text" className="app__search-input" name="app__search-input" placeholder="Search for artists, songs, and..."
                            onKeyDown={(e) => {
                                if (e.code === "Enter" && e.target.value !== "") {
                                    searchSongs(e.target.value)
                                }
                            }}
                        />
                        <div className="app__search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>

                    </div>
                </div>
                <div className={`${showResult ? "search__result show" : "search__result"}`}>
                    <SearchResult result={searchList} />
                </div>
                <Player song={playing} />
            </div>

        </div>
    )
}
