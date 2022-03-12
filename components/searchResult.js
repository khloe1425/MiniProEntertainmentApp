import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Store } from "../utils/store";
import { useContext } from "react";
export default function SearchResult({ result, setPlaySong }) {
    const { dispatch } = useContext(Store)
    return (
        <div>
            {result.map((item, index) => (
                <div className="search__item d-flex justify-content-between" key={index}>
                    <div className="col-11">
                        <h5>{item.title} </h5>
                        <span>Artis: {item.artist.name}</span>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "SET_PLAYING_SONG",
                                    payload: item
                                })
                            }}
                        ><FontAwesomeIcon icon={faPlay} color={"orange"} /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}
