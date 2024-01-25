/**
 * もっと見るButton
 */
import Link from 'next/link'

export const MoreButton = () => {
    return (
        <div className="top__button__updates">
            <button className="top__button__content">
                <Link href="topnews.html"> もっと見る</Link>
            </button>
        </div>
    )
}