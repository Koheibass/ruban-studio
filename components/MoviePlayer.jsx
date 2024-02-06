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
            <div className="text-center text-xs pb-4 text-[#937a43]">
                ベートーヴェン : ピアノソナタ第26番「告別」op.81a
            </div>
            <div className="text-center">
                <button className="text-xs text-[#937a43] inline-flex items-center border bg-none font-bold justify-center bg-transparent ml-2 py-1.5 px-1.5 my-px mx-[5px] rounded-[10px] border-solid border-[#a07c43] no-underline">
                    <Link href="/videos">もっと見る</Link>
                </button>
            </div>
        </>
    )
}
