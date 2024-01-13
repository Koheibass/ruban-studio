import Link from 'next/link'
import { TopButton } from '@/components/TopButton'

export const Info = () => {
    return (
        <div>
            <h3 class="info">
                <div>最新情報</div>
                <div class="translate__another">Updates</div>
            </h3>
            <div class="info_content">
                <div class="info_content_days">
                    {"2023.09.18"}
                    <small>(Mon)</small>
                </div>
                <Link href="https://oto-inochi.com/"
                    class="info_detail">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</Link>
                <br />
                <div class="info_content_days">
                    {"2023.08.01"}
                    <small>(Tue)</small>
                </div>
                <Link href="/news/2023801.html" class="info_detail">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
            </div>
            <TopButton />
        </div>
    )
}