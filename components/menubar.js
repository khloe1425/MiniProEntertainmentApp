import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChartLine, faCompass, faGlassCheers, faHeart, faHome, faStar, faTicketAlt, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useContext } from "react";
import { Store } from "../utils/store";
export default function Home() {
    const { playing, userName, dispatch } = useContext(Store);
    const logOutHandle = () => {
        localStorage.clear();
        dispatch({
            type: "SET_USER_NAME",
            payload: ""
        })
    }
    useEffect(() => {
        if (localStorage.getItem('name')) {
            dispatch({
                type: "SET_USER_NAME",
                payload: localStorage.getItem('name')
            })
        }
    }, [])
    return (
        <div className="col-lg-3 col-sm-12">
            <nav className="app__navbar">
                <div className="navbar__logo">
                    <a className="navbar__icon">
                        <i className="fab fa-forumbee" />
                    </a>
                    <a className="navbar__text">
                        <span className="text-warning">Bee</span>music
                    </a>
                </div>
                <div className="navbar__content">
                    <div className="navbar__home">
                        <ul className="navbar__list">
                            <li className="navbar__item navbar__user"><FontAwesomeIcon icon={faUser} color="orange" style={{ marginLeft: "3px" }} /> {userName ? <span className="ms-3">{userName}</span> :
                                <Link href="/login">Login / Register</Link>
                            }</li>
                            <div className={userName ? "log__out" : "d-none"}><button
                                onClick={logOutHandle}
                            ><FontAwesomeIcon icon={faSignOut} color="orange" /><span className="ms-3">Log out</span>
                            </button></div>
                            <li className="navbar__item"><FontAwesomeIcon icon={faHome} color="orange" /> <Link href={"/"}><a className="ms-3">Home</a></Link></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faChartLine} color="orange" /> <span className="ms-3">Trends</span></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faCompass} color="orange" /> <span className="ms-3">Feed</span></li>
                        </ul>
                    </div>
                    <div className="navbar__discover">
                        <p className="navbar__title">Discover</p>
                        <ul className="navbar__list">
                            <li className="navbar__item"><FontAwesomeIcon icon={faGlassCheers} color="orange" /> <span className="ms-3">New &amp;Notable</span></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faCalendarAlt} color="orange" /> <span className="ms-3">Release Calendar</span></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faTicketAlt} color="orange" /> <span className="ms-3">Event</span></li>
                        </ul>
                    </div>
                    <div className="navbar__collection">
                        <p className="navbar__title">Collection</p>
                        <ul className="navbar__list">
                            <li className="navbar__item"><FontAwesomeIcon icon={faHeart} color="orange" /> <Link href={"/favorite"}><a className="ms-3">Favorite songs</a></Link></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faUser} color="orange" /> <span className="ms-3">Artist</span></li>
                            <li className="navbar__item"><FontAwesomeIcon icon={faStar} color="orange" /> <span className="ms-3">Album</span></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar__user" style={{ flexGrow: 1 }}>
                    <div className="d-flex flex-column justify-content-center" style={{ height: '90%' }}>
                        <div className="artist__info">
                            <div className="artist__avatar">
                                <img src={playing.artist?.picture_small || "https://icon-library.com/images/musicbee-icon/musicbee-icon-12.jpg"} alt="artist image" className="user__img" />
                            </div>
                            <div className="user__name">
                                {playing.artist?.name}
                            </div>
                        </div>
                    </div>
                    <a className="user__goto"><i className="fas fa-chevron-right" /></a>
                </div>
            </nav>
        </div>
    )
}
