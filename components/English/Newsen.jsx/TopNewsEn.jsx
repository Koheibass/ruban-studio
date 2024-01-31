/**
 * トップNEWS 随時入れ替えあり
 */

import Link from 'next/link'

export const TopNewsEn = () => {
    return (
        <div className="news">
            <div className="news__title">NEWS</div>
            <Link href="https://oto-inochi.com/" className="top__news" target="_blank" rel="noopener noreferrer">
                <span className="top__news__content">The number of people in the online community I manage has reached 100 people.</span>
            </Link>
        </div>
    )
}