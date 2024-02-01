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
        <section className="section_media">
            <SectionHeader id="media" title="Media" titleEn="Media" />
            <div className="media__button">
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

            <div className="media__content" id="medialist">
                <div className="media__list">
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
                <div className="top__button__updates">
                    <button className="top__button__content">
                        <Link href="/videos">More</Link>
                    </button>
                </div>
            </div>
        </section >
    )
}