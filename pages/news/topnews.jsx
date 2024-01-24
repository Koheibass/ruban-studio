import Link from "next/link"
import { AppNav } from "@/components/AppNav"
import { Footer } from "@/components/Footer"

export default function Topnews() {
    return (
        <div class="whole" >
            <AppNav />
            <main class="latest-information__main">
                <div>
                    <h3 class="info">
                        <div>最新情報</div>
                        <div class="translate__another">Updates</div>
                    </h3>
                    <div class="info_content_detail">
                        <div class="info_content_days">
                            "2023.09.18"
                            <small>(Mon)</small>
                        </div>
                        <a href="https://oto-inochi.com/" class="info_detail">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</a>
                        <br />
                        <div class="info_content_days">
                            "2023.08.01"
                            <small>(Tue)</small>
                        </div>
                        <Link href="/news/20230801" class="info_detail">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
                        <br />
                        <div class="info_content_days">
                            "2022.02.12"
                            <small>(Sat)</small>
                        </div>
                        <a href="updates2.html" class="info_detail">カルチャーメディア誌「Bridge」に掲載されました。</a>
                        <br />
                        <div class="info_content_days">
                            "2021.05.31"
                            <small>(Mon)</small>
                        </div>
                        <a href="concert1.html" class="info_detail">オンラインコンサート開催決定！</a>
                    </div>
                </div>
                <div class="return">
                    <Link class="return__content" href="/">Topに戻る</Link>
                </div>
                <Footer />
            </main>
        </div>
    )
}