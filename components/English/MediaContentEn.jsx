import React from 'react'
import Link from 'next/link'
import { VideoMedia } from '../VideoMedia'
import { ImageMedia } from '../ImageMedia'
import { SectionHeader } from '../SectionHeader'

export const MediaContentEn = () => {
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
        },
        {
            id: 5,
            title: 'F.Chopin : Barcarolle op.60 Fis-dur',
            videoId: 'Cq0A7z6Ov24',
            thumbnailURL: '/photo/Barcarolle.jpg',
        },
        {
            id: 6,
            title: 'J.Brahms : 4 KlavierStücke op.119',
            videoId: 'Z89P1TQiEHM',
            thumbnailURL: '/photo/119.jpg',
        },
        {
            id: 7,
            title: 'L.v.Beethoven : Sonate für Klavier Nr.21 "Waldstein" op.53 1.Satz Allegro con brio',
            videoId: 'K5D_2XrDhiQ',
            thumbnailURL: '/photo/waldstein.jpg',
        },
        {
            id: 8,
            title: 'Johannes Brahms:6 Klavierstücke op.118',
            videoId: '7wDfVUm4-B0',
            thumbnailURL: '/photo/118.jpg',
        },
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
        },
        {
            id: 5,
            imageURL: '/photo/hero1.webp',
        },
        {
            id: 6,
            imageURL: '/photo/hero2.webp',
        },
        {
            id: 7,
            imageURL: '/photo/hero3.webp',
        },
        {
            id: 8,
            imageURL: '/photo/biography.webp',
        },
        {
            id: 9,
            imageURL: '/photo/concert1.webp',
        },
        {
            id: 8,
            imageURL: '/photo/concert2.webp',
        },
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
                <div className="media__list text-center gap-2 grid-cols-2 grid mt-4">
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
                {
                    mode === 'video' &&
                    <div class="text-center">
                        <button class="text-xs text-[#937a43] inline-flex items-center border bg-none font-bold justify-center bg-transparent ml-2 py-1.5 px-1.5 my-px mt-4 mx-[5px] rounded-[10px] border-solid border-[#a07c43] no-underline">
                            <a href="https://www.youtube.com/@PianistRinaAkaboshi"> And More</a>
                        </button>
                    </div>
                }
                <br />
                <div className="text-center my-4">
                    <Link className="underline text-[#ff9a9a]" href="/">Top</Link>
                </div>
            </div>
        </section >
    )
}