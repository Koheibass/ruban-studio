import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import Link from 'next/link'
import { TopMovieButton } from '@/components/TopMovieButton'

export const MoviePlayerEn = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ModalVideo channel="youtube" youtube={{ mute: 1, autoplay: 1, playsinline: 0, }} isOpen={isOpen} videoId="4Tr9Y_rOfh4" onClose={() => setIsOpen(false)} />
            <div>
                <button className="btn-primary" onClick={() => setIsOpen(true)}></button>
                <TopMovieButton className="btn-primary" onClick={() => setIsOpen(true)} />
            </div >
            <div className="top-tracklist">
                L.v.Beethoven : PianoSonataNo.26 Es-DurOp.81a{"Lebewohl"}
            </div>
            <div className="top__button__updates">
                <button className="top__button__content">
                    <Link href="/videos">More</Link>
                </button>
            </div>
        </>
    )
}
