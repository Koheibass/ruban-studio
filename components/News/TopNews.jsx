/**
 * トップNEWS 随時入れ替えあり
 */

import { useLanguage } from '@/utils/language';
import Link from 'next/link'


export const TopNews = () => {
    const { lang } = useLanguage();

    return (
        <div className="news">
            <div className="news__title">NEWS</div>
            {
                lang === 'ja' &&

                <Link href="https://oto-inochi.com/" className="top__news" target="_blank" rel="noopener noreferrer">
                    <span className="top__news__content">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</span>
                </Link>
            }
            {
                lang === 'en' &&
                <Link href="https://oto-inochi.com/" className="top__news" target="_blank" rel="noopener noreferrer">
                    <span className="top__news__content">The number of people in the online community I manage has reached 100 people.</span>
                </Link>
            }
        </div>
    )
}