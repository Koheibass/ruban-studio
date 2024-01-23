import { SectionHeader } from "./SectionHeader"
import Link from 'next/link'

export const SectionBiography = () => {
    return (
        <section class="section_biography">
            <SectionHeader id="biography" title="プロフィール" titleEn="Biography" />
            <div>
                <div>
                    <img src="/photo/biography.webp" class="biography__photo" width="100%" />
                </div>

                <div class="biography__name">
                    <div class="biography__name__japanese">
                        赤星 里奈
                        <span class="biography__name__alphabet">
                            Rina Akaboshi
                        </span>
                    </div>
                </div>

                <div class="biography__button">
                    <button onClick="switchToJapanese();removeClassToJapanese()" id="JapaneseLeft"
                        class="biography__button__japanese activate">Japanese</button>
                    <button onClick="switchToEnglish();addClassToEmglish()" id="EnglishRight"
                        class="biography__button__english">English</button>
                </div>

                <div class="main__profile" id="profile">
                    <p>
                        クラシック音楽を専門とするピアニスト。<br />
                        特にドイツ音楽に造詣が深いが、近年ではフランス音楽やロシア音楽にも研究心を持ち、レパートリーと表現の幅を拡げている。
                        <br />
                        円熟した表現と音楽性を深く追求した演奏に定評があり、響きの新しい可能性を探求するために奏法を研究し続けている。
                        <br />
                        2018 年に初のソロアルバム<br />「Neue Welt ～新しい世界～」をリリース。
                        <br />
                        現在は自身の演奏に関する研究活動や後進の育成とともに、クラシック音楽界に貢献すべく活動の幅を広げている。
                    </p>
                    <button class="biography__button__content__japanese">
                        <Link href="/biography">詳細</Link>
                    </button>
                </div>
            </div>
        </section>

    )
}