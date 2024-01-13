/**
 * トップNEWS 随時入れ替えあり
 */


import Link from 'next/link'

export const TopNews = () => {
    return (
        <div class="news">
            <div class="news__title">NEWS</div>
            <Link href="https://oto-inochi.com/" class="top__news">
                <span class="top__news__content">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</span>
            </Link>
        </div>
    )
}