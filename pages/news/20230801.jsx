import Link from "next/link"
import { Footer } from "@/components/Footer"
import { AppNavNews } from "@/components/AppNavNews"

export default function News20230801() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto" >
            <AppNavNews />
            <main className="grow px-4 bg-[#fefaff]">
                <div className="mx-auto">
                    <div className="grid p-4 border rounded gap-4 bg-white border-[#9d8566] border-solid mt-4">
                        <div>
                            <div className="font-bold text-xl lg:text-center lg:py-4">
                                みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定
                            </div>
                            <div className="my-2 text-lg lg:text-center">
                                {"2023.08.01"}
                            </div>
                            <img src="/photo/2023801.jpg" width="100%" className="lg:w-[400px] lg:m-auto" /><image />
                        </div>
                        <hr className="my-4 m-0 h-0 text-inherit border-t" />
                        <div className="break-all lg:text-center">
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
                                <br />
                                <br /><p className="text-red-500">※参加申込は終了しました</p>
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <Link className="underline text-[#ff9a9a]" href="/">Topに戻る</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}