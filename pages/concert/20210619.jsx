import Link from "next/link"
import { AppNav } from "@/components/AppNav"
import { Footer } from "@/components/Footer"

export default function Concert20210619() {
    return (
        <div className="whole" >
            <AppNav />
            <main className="latest-information__main">
                <div className="latest-information">
                    <h2 className="latest-information__title">コンサート</h2>
                    <div className="latest-information__content">
                        <div>
                            <div className="latest-information__sentence">
                                赤星 里奈 ピアノリサイタル vol.1 presented by "MUSICUM"
                            </div>
                            <div className="latest-information__days">
                                2021.06.19 YouTube / イマチケ
                            </div>
                        </div>
                        <hr className="while" />
                        <div className="latest-information__detail">
                            <p>クラシックピアニスト 赤星 里奈
                                <br />
                                本人初のオンライン配信によるピアノリサイタル。ゲストを交えたトークコーナーの二本立てです。
                                <br />
                                今回はピアノにおける「ドイツ三大B」(バッハ、ベートーヴェン、ブラームス)をお届けします。イマチケだけでの、音楽家夫婦ふたりによるアフタートークもお楽しみください。
                                <br />
                                リサイタル本編+アフタートーク／本編の高音質&高画質アーカイブ閲覧権に加え、アフタートーク付き配信視聴チケット販売！
                                <br />
                                チケット価格：¥2,500(税込)　決済手数料として別途¥220(税込)が必要です。
                                チケット販売サイト：イマチケ
                                https://ima-ticket.com/event/270
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3>プログラム</h3>
                            <ul>
                                <li>
                                    <p>
                                        J.S.バッハ / Bach, Johann Sebastian
                                        <br />
                                        平均律クラヴィーア曲集第2巻より 第9番 BWV.878 ホ長調
                                    </p>
                                    <p>
                                        ベートーヴェン / Beethoven, Ludwig van
                                        <br />
                                        ピアノソナタ第21番「ワルトシュタイン」 Op.53 ハ長調
                                    </p>
                                    <p>
                                        ブラームス / Brahms, Johannes
                                        <br />
                                        ピアノのための4つの小品 Op.119
                                    </p>
                                    他
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="return">
                        <Link className="return__content" href="/">Topに戻る</Link>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}