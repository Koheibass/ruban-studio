import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { TopButton } from '@/components/TopButton'
import { PhotoButton } from '@/components/PhotoButton'

export const MoviePlayer = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ModalVideo channel="youtube" youtube={{ mute: 1, autoplay: 1, playsinline: 0, }} isOpen={isOpen} videoId="4Tr9Y_rOfh4" onClose={() => setIsOpen(false)} />
            <div className="pl-24">
                <button className="btn-primary" onClick={() => setIsOpen(true)}><PhotoButton /></button>
            </div >
            <div class="top-tracklist">
                ベートーヴェン : ピアノソナタ第26番「告別」op.81a
            </div>
            <TopButton />
        </>
    )
}
