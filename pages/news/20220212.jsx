import Link from "next/link"
import { Footer } from "@/components/Footer"
import { AppNavIndi } from "@/components/AppNavIndi"

export default function News20220212() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto" >
            <AppNavIndi />
            <main className="grow px-4 bg-[#fefaff]">
                <div className="mx-auto">
                    <div className="grid p-4 border rounded gap-4 bg-white border-[#9d8566] border-solid mt-4">
                        <div>
                            <div className="font-bold text-xl">
                                カルチャーメディア誌「Bridge」に掲載されました。
                            </div>
                            <div className="my-2 text-lg">
                                2022.02.12
                            </div>
                        </div>
                        <hr className="my-4 m-0 h-0 text-inherit border" />
                        <div className="break-all">
                            <p>関西×音楽×学生のためのカルチャーメディア、Bridge様にて赤星里奈の記事が掲載されました。</p>
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