import Link from 'next/link'
import { Footer } from '@/components/Footer';
import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { LanguageContext } from '@/utils/language';
import { AppNav } from '@/components/AppNav';

export default function BiographyEn() {

    const [mode, setMode] = React.useState('english') // or English
    const handleClickModeButton = (mode) => {
        if (mode === 'english') {
            setMode('english')
        } else if (mode === 'japanese') {
            setMode('japanese')
        }
    }
    return (
        <LanguageContext.Provider value='en'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <main className="grow bg-[#fefaff] px-4">
                    <SectionHeader id="biography" title="Biography" titleEn="Biography" />
                    <div>
                        <div>
                            <img src="/photo/biography.webp" className="rounded-xl lg:w-[600px] lg:m-auto" width="100%" />
                        </div>
                        <div className="mt-2 text-[#937a43] lg:text-center lg:my-6">
                            {
                                mode === 'japanese' &&
                                <div className="text-2xl font-noto lg:text-3xl">
                                    赤星 里奈
                                    <span className="text-lg font-paris ml-1 lg:text-3xl">
                                        Rina Akaboshi
                                    </span>
                                </div>
                            }
                            {
                                mode === 'english' &&
                                <div className="text-2xl font-noto">
                                    Rina Akaboshi
                                </div>
                            }
                        </div>
                        <div className="justify-center flex my-4 lg:pb-4">
                            <button
                                className={`movie-button ${mode === 'japanese' ? 'activate' : ''}`}
                                onClick={() => handleClickModeButton('japanese')}
                            >
                                Japanese
                            </button>
                            <button
                                className={`photo-button ${mode === 'english' ? 'activate' : ''}`}
                                onClick={() => handleClickModeButton('english')}
                            >
                                English
                            </button>
                        </div>
                        <div className="max-w-none" id="profile">
                            {
                                mode === 'japanese' &&
                                <p className='text-[#937a43] lg:text-[18px] lg:mx-20'>1989 年滋賀県に生まれ、2 歳より音楽教室にてピアノを始める。2002 年、妹の赤星佳奈とのデュオで第 26
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
                            }
                            {
                                mode === 'english' &&
                                <p className='text-[#937a43] lg:text-[18px] lg:mx-20'>
                                    Born in Shiga, Japan in 1989, Rina Akaboshi started taking piano lessons at the age of two. In 2002, she was awarded in Duet with her sister, Kana Akaboshi at 26th PTNA Piano Competition. (First place of all Middle-Level in Western Japan, then the Honorable Mention at the Whole Japan Finals.) While in high school, she won Second Place in 21st Shiga-Prefecture High School Piano Competition. During her college years, she was selected to have concerts regularly, and attended at the New Performer Concerts. While a Sophomore, she received First Place in 29th Aichi Piano Competition and Chunichi-News Paper Grand Award. During her Senior year, she won the Espoir Award at Age-U Piano Section of 14th Osaka International Music Competition. Upon obtaining the BA in Music at Aichi Music & Arts University, she received Rotary Club Scholarship, and attended the master’s degree courses in Germany, and graduated Rostock University of Music and Theatre with the most honor. While in school, she was also awarded Ad Infinitum Foundation Scholarship, and started performing vigorously in Germany and in Japan. She has taken numerous master’s classes and was enlightened by respected pianists such as Lilya Zilberstein, Jacques Rouvier, and Pavel Gililov. In 2017, she was the semi-finalist at Giorgos Thymis International 　 Piano Competition in Greece, where judges were Cyprien Katsaris and Eliso Virsaladze. In 2018, her first solo album, “Neue Welt – New World” was released in Japan. So far, she has studied under Prof.Suguru Kawae, Prof.Atsushi Kitazumi, Prof.Bernd Zack, Ms.Aya Matsushita and Prof.Yu Kakuno. Her concert activities continue while studying under Yuya Tsuda at Tokyo Art University (Graduate-level Special Course), and also teaching professional level students.
                                </p>
                            }
                            <div className="text-center my-4">
                                <Link className="underline text-[#ff9a9a]" href="/indexen">Top</Link>
                            </div>
                        </div>

                    </div>
                </main>
                <Footer />
            </div >
        </LanguageContext.Provider>
    )
}