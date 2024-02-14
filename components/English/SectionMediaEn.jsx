import React from 'react'
import Link from 'next/link'
import { SectionHeader } from '../SectionHeader'
import { VideoMedia } from '../VideoMedia'
import { ImageMedia } from '../ImageMedia'

export const SectionMediaEn = () => {
    const videoList = [
        {
            id: 1,
            title: 'L.v.Beethoven : Piano Sonata No.26 Es-Dur Op.81a "Lebewohl"',
            videoId: '4Tr9Y_rOfh4',
            thumbnailURL: '/photo/Lebewohl.jpg',
        },
        {
            id: 2,
            title: 'Schumann-Liszt : Widmung with NewYork Steinway Piano',
            videoId: 'n-B9BzPxbzk',
            thumbnailURL: '/photo/Widmung.jpg',
        },
        {
            id: 3,
            title: 'F.Chopin : Etude op.10-5 Ges-dur "Black keys"',
            videoId: 'IkZB4TZtUAM',
            thumbnailURL: '/photo/blackkeys.jpg',
        },
        {
            id: 4,
            title: 'F.Schubert : Impromptus No.3 Ges-Dur Op.90-3 D 899',
            videoId: '66Fel4dySJ8',
            thumbnailURL: '/photo/Impromptus.jpg',
        }
    ]

    const imageList = [
        {
            id: 1,
            imageURL: '/photo/photo1.webp',
        },
        {
            id: 2,
            imageURL: '/photo/photo2.webp',
        },
        {
            id: 3,
            imageURL: '/photo/photo3.webp',
        },
        {
            id: 4,
            imageURL: '/photo/photo4.webp',
        }
    ]

    const [mode, setMode] = React.useState('video') // or image
    const handleClickModeButton = (mode) => {
        if (mode === 'video') {
            setMode('video')
        } else if (mode === 'image') {
            setMode('image')
        }
    }

    return (
        <section className="pb-8">
            <SectionHeader id="media" title="Media" titleEn="Media" />
            <div className="flex justify-center my-2">
                <button
                    className={`movie-button ${mode === 'video' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('video')}
                >
                    Movie
                </button>
                <button
                    className={`photo-button ${mode === 'image' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('image')}
                >
                    Photo
                </button>
            </div>

            <div className="text-center" id="medialist">
                <div className="text-center gap-2 grid-cols-2 grid mt-4 lg:grid lg:grid-cols-4 lg:gap-[1px] lg:mt-6">
                    {
                        mode === 'video' &&
                        videoList.map((video) => (
                            <VideoMedia key={video.id} video={video} videoId={video.videoId} />
                        ))
                    }

                    {
                        mode === 'image' &&
                        imageList.map((image) => (
                            <ImageMedia key={image.id} image={image} />
                        ))
                    }
                </div>
                <br />
                <div>
                    <button className="text-xs text-[#937a43] inline-flex items-center absolut border bg-none font-bold justify-center bg-transparent ml-2 py-1.5 px-3 my-2 mx-[5px] rounded-[10px] border-solid border-[#a07c43] no-underline lg:mt-0.5">
                        <img src="/icon/right-arrow-g.svg" className='w-2 mr-1'></img>
                        <Link href="/videosen">More</Link>
                    </button>
                </div>
            </div>
        </section >
    )
}