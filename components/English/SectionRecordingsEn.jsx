import { SectionHeader } from "../SectionHeader"

export const SectionRecordingsEn = () => {
    return (
        <section className="section_recordings">
            <SectionHeader id="recordings" title="CD" titleEn="Recordings" />
            <div className="recordings__content">
                <div>
                    <img src="/photo/NeueWelt1.webp" className="recordings__photo" width="100%" />
                </div>
                <div className="cd__content">
                    <h3 className="cd__title">Neue Welt 〜新しい世界〜</h3>
                    <p className="cd__days">Released January 11, 2018<br />¥ 3,300 (tax included) + shipping fee</p>
                    <p className="cd__content">This CD was recorded in Germany.
                        Please enjoy the beautiful tones that resonate in the German air.
                    </p>
                    <div className="recorded-music">
                        <b>Track Listings</b>
                        <br />
                        <div>
                            <ul className="recorded-music-list">
                                <li className="recorded-music-list__content">
                                    Johann Sebbastian Bach
                                    <br />
                                    Das Wohltemperierte Clavier Teil Ⅱ Nr.9 E-dur BWV878
                                </li>
                                <li className="recorded-music-list__content">
                                    Ludwig van Beethoven
                                    <br />
                                    Klaviersonate E-dur Nr.30 op.109
                                </li>
                                <li className="recorded-music-list__content">
                                    Franz Schubert
                                    <br />
                                    Klaviersonate G-dur Nr.18 {"Fantasie"} D894
                                </li>
                            </ul>
                        </div>
                        <br />
                        Recorded : April 27,2017
                        <br />Barocksaal Rostock, Deutschland
                    </div>
                    <button className="recordings__button">
                        <a href="https://rinaakaboshi.official.ec/items/65023901/" target="_blank" rel="noopener noreferrer">buy CD</a>
                    </button>
                </div>
            </div>
        </section>
    )
}