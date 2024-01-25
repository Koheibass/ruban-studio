import Link from "next/link"
import { AppNav } from "@/components/AppNav"
import { Footer } from "@/components/Footer"

export default function News20230801() {
    return (
        <div class="whole" >
            <AppNav />
            <main class="latest-information__main">
                <div class="latest-information">
                    <div class="latest-information__content">
                        <div>
                            <div class="latest-information__sentence">
                                みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定
                            </div>
                            <div class="latest-information__days">
                                {"2023.08.01"}
                            </div>
                            <img src="/photo/2023801.jpg" width="30%" /><image />
                        </div>
                        <hr class=" while" />
                        <div class="latest-information__detail">
                            <p>ピアニスト赤星里奈主催 {"第1回 おといのち音楽会"}
                                開催決定！！
                                <br />
                                <br />
                                みんなの挑戦をみんなで見守り背中を押す。
                                <br />お互いに健闘をたたえ励まし合える場所。
                                <br />誰もが自由に挑戦できる舞台。
                                <br />そんな温かい会を目指します。
                                <br /><br />
                                年齢や音楽歴、演奏楽器など関係なく、
                                <br />それぞれの目標に挑戦できる場所です。
                                <br />ぜひご参加をお待ちしています！！
                                <br />※参加申込は終了しました
                                <br /><br />
                            </p>
                        </div>
                    </div>
                    <div class="return">
                        <Link class="return__content" href="/">Topに戻る</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}