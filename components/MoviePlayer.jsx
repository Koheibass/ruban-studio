import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { MoreButton } from '@/components/MoreButton'
import { PhotoButton } from '@/components/PhotoButton'

export const MoviePlayer = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ModalVideo channel="youtube" youtube={{ mute: 1, autoplay: 1, playsinline: 0, }} isOpen={isOpen} videoId="4Tr9Y_rOfh4" onClose={() => setIsOpen(false)} />
            <div>
                <button className="btn-primary" onClick={() => setIsOpen(true)}></button>
                <PhotoButton className="btn-primary" onClick={() => setIsOpen(true)} />
            </div >
            <div class="top-tracklist">
                ベートーヴェン : ピアノソナタ第26番「告別」op.81a
            </div>
            <MoreButton />
        </>
    )
}
