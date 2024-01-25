import Link from "next/link"
import { AppNav } from "@/components/AppNav"
import { Footer } from "@/components/Footer"

export default function News20220212() {
    return (
        <div class="whole" >
            <AppNav />
            <main class="latest-information__main">
                <div class="latest-information">
                    <div class="latest-information__content">
                        <div>
                            <div class="latest-information__sentence">
                                カルチャーメディア誌「Bridge」に掲載されました。
                            </div>
                            <div class="latest-information__days">
                                2022.02.12
                            </div>
                        </div>
                        <hr class="while" />
                        <div class="latest-information__detail">
                            <p>関西×音楽×学生のためのカルチャーメディア、Bridge様にて赤星里奈の記事が掲載されました。</p>
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