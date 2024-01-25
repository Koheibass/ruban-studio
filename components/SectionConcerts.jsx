import { SectionHeader } from "./SectionHeader"
import Link from "next/link"

export const SectionConcerts = () => {
    return (
        <section className="section_concerts">
            <SectionHeader id="concerts" title="コンサート" titleEn="Conserts" />
            <div className="concerts__whole">
                <div className="concerts__selector">
                    <div>
                        <div className="concerts__button">
                            {/* "switchToUpcoming();removeClassToUpcoming()" */}
                            <button onClick={() => null} id="UpcomingLeft"
                                className="upcoming__button">Upcoming</button>
                            {/* "switchToPast();addClassToPast()"  */}
                            <button onClick={() => null} id="PastRight"
                                className="past__button activate">Past</button>
                        </div>
                        <div className="concerts__content" id="Concerts">
                            <div>
                                <div>
                                    <span className="concert-days">2021.06.19</span>
                                    <span className="concert-detail">YouTube / イマチケ</span>
                                </div>
                                <Link href="/concert/20210619" className="concert-update">赤星 里奈 ピアノリサイタル vol.1 presented by
                                    {"MUSICUM"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/photo/concert1.webp" className="concert-photo" width="100%" />
                </div>
            </div>
        </section>
    )
}