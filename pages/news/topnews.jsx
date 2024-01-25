import Link from "next/link"
import { AppNav } from "@/components/AppNav"
import { Footer } from "@/components/Footer"

export default function Topnews() {
    return (
        <div className="whole" >
            <AppNav />
            <main className="latest-information__main">
                <div>
                    <h3 className="info">
                        <div>最新情報</div>
                        <div className="translate__another">Updates</div>
                    </h3>
                    <div className="info_content_detail">
                        <div className="info_content_days">
                            {"2023.09.18"}
                            <small>(Mon)</small>
                        </div>
                        <a href="https://oto-inochi.com/" className="info_detail">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</a>
                        <br />
                        <div className="info_content_days">
                            {"2023.08.01"}
                            <small>(Tue)</small>
                        </div>
                        <Link href="/news/20230801" className="info_detail">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
                        <br />
                        <div className="info_content_days">
                            {"2022.02.12"}
                            <small>(Sat)</small>
                        </div>
                        <a href="/news/20220212" className="info_detail">カルチャーメディア誌「Bridge」に掲載されました。</a>
                        <br />
                        <div className="info_content_days">
                            {"2021.05.31"}
                            <small>(Mon)</small>
                        </div>
                        <a href="/concert/20210619" className="info_detail">オンラインコンサート開催決定！</a>
                    </div>
                </div>
                <div className="return">
                    <Link className="return__content" href="/">Topに戻る</Link>
                </div>
                <Footer />
            </main>
        </div>
    )
}