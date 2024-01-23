import Link from "next/link"
import { AppNav } from '@/components/AppNav';
import TopSlider from "@/components/TopSlider";
import { SectionHeader } from "@/components/SectionHeader";

export default function Bio() {
    return (
        <div class="whole">
            <AppNav />
            <TopSlider />
            <main class="main">
                <SectionHeader id="biography" title="プロフィール" titleEn="Biography" />
                <h2 class="element__title">
                    <div>プロフィール</div>
                    <div class="translate">Biography</div>
                </h2>
                <div class="biography__content">
                    <div>
                        <Link src="biography.webp" class="biography__photo" width="100%"></Link>
                    </div>
                    <div class="biography__name">
                        <div class="biography__name__japanese">
                            赤星 里奈
                            <span class="biography__name__alphabet">
                                Rina Akaboshi
                            </span>
                        </div>
                        <div class="biography__button">
                            <button onClick="switchToJapanese();removeClassToJapanese()" id="JapaneseLeft"
                                class="biography__button__japanese activate">Japanese</button>
                            <button onClick="switchToEnglish();addClassToEmglish()" id="EnglishRight"
                                class="biography__button__english">English</button>
                        </div>
                        <div class="main__profile" id="profile">
                            <p>1989 年滋賀県に生まれ、2 歳より音楽教室にてピアノを始める。2002 年、妹の赤星佳奈とのデュオで第 26
                                回ピティナピアノコンペティションデュオ中級西日本大会第一位、全国決勝大会奨励賞受賞。高校在学中には第 21 回滋賀県高校生ピアノコンクールにて第二位となる。
                                <br />
                                愛知県立芸術大学音楽学部に在学中には、選抜され定期演奏会や新進演奏家コンサートなどに出演。大学 3 年生時に第 29
                                回愛知ピアノコンクールにて金賞、中日新聞社賞を受賞し、優勝する。また大学 4 年生時には第 14 回大阪国際音楽コンクールピアノ Age-U 部門にてエスポワール賞を受賞。
                                <br />
                                学部卒業後、ロータリー財団地区補助金奨学金を受け、ドイツ国立ロストック音楽演劇大学修士課程に入学、最優秀の成績で修了する。在学中、オーディションにて選出され Ad infinitum
                                faundation の奨学生となる。この頃から日本、ドイツで積極的に演奏活動を行う。在独中には様々なマスタークラスに参加し、リーリャ ジルベルシュタイン、ジャック ルヴィエ、パヴェル
                                ギリロフなどの著名なピアニストより多くのことを吸収する。2017 年にはシプリアン カツァリスやエリソ ヴィルサラーゼが審査員を務める Giorgos Thymis
                                国際ピアノコンクール（ギリシャ）にてセミファイナリストとなる。帰国後の 2018 年、初のソロアルバム「Neue
                                Welt〜新しい世界〜」をリリース。2022年、東京藝術大学音楽学部別科修了。
                                <br />
                                これまでに、福留真循、多川響子、河江優、服部久美子、北住淳、Bernd Zack、松下彩、角野裕、津田裕也の各氏に師事。
                                <br />
                                現在は、自身の演奏に関する研究活動や後進の育成とともに、クラシック音楽界に貢献すべく活動の幅を広げている。
                            </p>
                            <div class="return">
                                <a class="return__content" href="index.html">Topに戻る</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="footer">
                <div class="footer__content">
                    <a href="https://www.instagram.com/akaboshi_rina/">
                        <Link src="Instagram.svg" class="footer__instagram" width="50" height="50" alt="twitter"></Link>
                    </a>
                    <a href="https://www.youtube.com/@akaboshirina">
                        <Link src="YouTube.svg" class="footer__youtube" width="60" height="60" alt="YouTube"></Link>
                    </a>
                </div>
                <div class="lisence">© 2023 Rina Akaboshi</div>
            </div>
        </div>
    )
}