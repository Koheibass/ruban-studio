import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { TopMovieButton } from './TopMovieButton'
import Link from 'next/link'

export const MoviePlayer = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ModalVideo channel="youtube" youtube={{ mute: 1, autoplay: 1, playsinline: 0, }} isOpen={isOpen} videoId="4Tr9Y_rOfh4" onClose={() => setIsOpen(false)} />
            <div>
                <button className="btn-primary" onClick={() => setIsOpen(true)}></button>
                <TopMovieButton className="btn-primary" onClick={() => setIsOpen(true)} />
            </div >
            <div className="top-tracklist">
                ベートーヴェン : ピアノソナタ第26番「告別」op.81a
            </div>
            <div className="top__button__updates">
                <button className="top__button__content">
                    <Link href="/videos">もっと見る</Link>
                </button>
            </div>
        </>
    )
}
