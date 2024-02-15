import Link from "next/link"
import { Footer } from "@/components/Footer"
import { AppNavNews } from "@/components/AppNavNews"

export default function Topnews() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNavNews />
            <main className="grow px-4 bg-[#fefaff]">
                <div>
                    <h3 className="text-center text-[16px] leading-none font-bold mb-4 pt-4 pb-1 text-[#937a43] font-noto">
                        <div>最新情報</div>
                        <div className="translate__another">Updates</div>
                    </h3>
                    <div className="grid mb-10">
                        <div className="font-bold text-sm text-[#937a43]">
                            {"2023.09.18"}
                            <small>(Mon)</small>
                        </div>
                        <a href="https://oto-inochi.com/" className="block underline text-[#ff9a9a]">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</a>
                        <br />
                        <div className="font-bold text-sm text-[#937a43]">
                            {"2023.08.01"}
                            <small>(Tue)</small>
                        </div>
                        <Link href="/news/20230801" className="block underline text-[#ff9a9a]">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
                        <br />
                        <div className="font-bold text-sm text-[#937a43]">
                            {"2022.02.12"}
                            <small>(Sat)</small>
                        </div>
                        <Link href="/news/20220212" className="block underline text-[#ff9a9a]">カルチャーメディア誌「Bridge」に掲載されました。</Link>
                        <br />
                        <div className="font-bold text-sm text-[#937a43]">
                            {"2021.05.31"}
                            <small>(Mon)</small>
                        </div>
                        <Link href="/concert/20210619" className="block underline text-[#ff9a9a]">オンラインコンサート開催決定！</Link>
                    </div>
                </div>
                <div className="text-center my-4">
                    <Link className="underline text-[#ff9a9a]" href="/">Topに戻る</Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}