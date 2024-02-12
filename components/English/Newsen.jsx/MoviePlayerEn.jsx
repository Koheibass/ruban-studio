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
            <div className="text-center text-xs pb-4 text-[#937a43]">
                L.v.Beethoven : PianoSonataNo.26 Es-DurOp.81a{"Lebewohl"}
            </div>
            <div className="text-center">
                <button className="text-xs text-[#937a43] inline-flex items-center absolut border  bg-none font-bold justify-center bg-transparent ml-2 py-1.5 px-1.5 my-2 mx-[5px] rounded-[10px] border-solid border-[#a07c43] no-underline lg:mt-2">
                    <img src="/icon/right-arrow-g.svg" className='w-2 mr-1'></img>
                    <Link href="/videos">More</Link>
                </button>
            </div>
        </>
    )
}
