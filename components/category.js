export default function Category() {
    return (
        <div className="col-lg-3 col-sm-12">
            <div className="app__sidebar">
                <div className="app__shortcut text-center">
                    <h2 className="shortcut__text">Shortcuts</h2>
                    <ul className="shortcut__list">
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">❄️ Chill</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🎸 Rocks</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🎹 Piano instrumental</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🥁 Beat</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🌟 Pop</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🎺 Jazz</a>
                        </li>
                        <li className="shortcut__item">
                            <a href="#" className="shortcut__link">🎵 Acoustic</a>
                        </li>
                    </ul>
                </div>
                <div className="app__favartist">
                    <h2 className="favartist__title text-center">Fav Artists</h2>
                    <ul className="favartist__list">
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://media.laodong.vn/storage/newsportal/2022/2/8/1002117/Justine-Bieber-Dat-T.jpg" alt="justin bieber" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">Justin Bieber</p>
                                    <p className="favartist__desc">17 Song in library</p>
                                </div>
                            </a><a href="#" className="favartist__item-more">
                                <i className="fas fa-ellipsis-h" />
                            </a>
                        </li>
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/f/ef749514b7cbe210ef5286eb78ad96a0_1395036564.jpg" alt="sia" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">SIA</p>
                                    <p className="favartist__desc">15 Song in library</p>
                                </div>
                            </a><a href="#" className="favartist__item-more">
                                <i className="fas fa-ellipsis-h" />
                            </a>
                        </li>
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://znews-stc.zdn.vn/static/topic/person/taylorswift.jpg" alt="taylor swift" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">Taylor Swift</p>
                                    <p className="favartist__desc">20 Song in library</p>
                                </div>
                            </a>
                        </li>
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://essaha.info/wp-content/uploads/2019/11/alan-walker2.jpg" alt="alan walker" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">Alan Walker</p>
                                    <p className="favartist__desc">10 Song in library</p>
                                </div>
                            </a>
                        </li>
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://imgamp.phunutoday.vn/files/news/2020/11/20/phai-dep-co-the-ap-dung-3-buoc-de-co-toc-mai-dep-va-chac-chan-nhu-lisa-21-11-114622.jpg" alt="Lisa" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">Lisa</p>
                                    <p className="favartist__desc">12 Song in library</p>
                                </div>
                            </a>
                        </li>
                        <li className="favartist__item">
                            <a href="#" className="favartist__link">
                                <div className="favartist__item-avatar">
                                    <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg" alt="Rosé" className="favartist__img" />
                                </div>
                                <div className="favartist__item-info">
                                    <p className="favartist__name">Rosé</p>
                                    <p className="favartist__desc">17 Song in library</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
