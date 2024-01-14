import { SectionHeader } from "./SectionHeader"
import Link from "next/link"

export const SectionConcerts = () => {
    return (
        <section class="section_concerts">
            <SectionHeader id="concerts" title="コンサート" titleEn="Conserts" />
            <div class="concerts__whole">
                <div class="concerts__selector">
                    <div>
                        <div class="concerts__button">
                            <button onClick="switchToUpcoming();removeClassToUpcoming()" id="UpcomingLeft"
                                class="upcoming__button">Upcoming</button>
                            <button onClick="switchToPast();addClassToPast()" id="PastRight"
                                class="past__button activate">Past</button>
                        </div>
                        <div class="concerts__content" id="Concerts">
                            <div>
                                <div>
                                    <span class="concert-days">2021.06.19</span>
                                    <span class="concert-detail">YouTube / イマチケ</span>
                                </div>
                                <Link href="concert1.html" class="concert-update">赤星 里奈 ピアノリサイタル vol.1 presented by
                                    {"MUSICUM"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/photo/concert1.webp" class="concert-photo" width="100%" />
                </div>
            </div>
        </section>
    )
}