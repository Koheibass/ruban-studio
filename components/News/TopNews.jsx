/**
 * トップNEWS 随時入れ替えあり
 */

import Link from 'next/link'

export const TopNews = () => {
    return (
        <div className="news">
            <div className="news__title">NEWS</div>
            <Link href="https://oto-inochi.com/" className="top__news" target="_blank" rel="noopener noreferrer">
                <span className="top__news__content">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</span>
            </Link>
        </div>
    )
}