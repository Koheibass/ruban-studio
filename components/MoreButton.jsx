/**
 * もっと見るButton
 */
import Link from 'next/link'

export const MoreButton = () => {
    return (
        <div class="top__button__updates">
            <button class="top__button__content">
                <Link href="topnews.html"> もっと見る</Link>
            </button>
        </div>
    )
}