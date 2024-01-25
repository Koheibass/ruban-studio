import React from 'react'
import { SectionHeader } from "./SectionHeader"
import Link from 'next/link'
import { VideoMedia } from './VideoMedia'
import { ImageMedia } from './ImageMedia'

export const SectionMedia = () => {
    const videoList = [
        {
            id: 1,
            title: 'ベートーヴェン : ピアノソナタ第s26番「告別」op.81a',
            videoId: '4Tr9Y_rOfh4',
            thumbnailURL: '/photo/Lebewohl.jpg',
        },
        {
            id: 2,
            title: 'シューマン＝リスト : 献呈',
            videoId: 'n-B9BzPxbzk',
            thumbnailURL: '/photo/Widmung.jpg',
        },
        {
            id: 3,
            title: 'ショパン : 練習曲集op.10よりNo.5「黒鍵」',
            videoId: 'IkZB4TZtUAM',
            thumbnailURL: '/photo/blackkeys.jpg',
        },
        {
            id: 4,
            title: 'シューベルト：即興曲 第3番 D899 op.90-3 変ト長調',
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
            <SectionHeader id="media" title="メディア" titleEn="Media" />
            <div class="media__button">
                <button
                    className={`movie-button ${mode === 'video' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('video')}
                >
                    動画
                </button>
                <button
                    className={`photo-button ${mode === 'image' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('image')}
                >
                    写真
                </button>
            </div>

            <div className="media__content" id="medialist">
                <div className="media__list">
                    {
                        mode === 'video' &&
                        videoList.map((video) => (
                            <VideoMedia key={video.id} video={video} />
                        ))
                    }

                    {
                        mode === 'image' &&
                        imageList.map((image) => (
                            <ImageMedia key={video.id} image={image} />
                        ))
                    }
                </div>
                <br />
                <div className="top__button__updates">
                    <button className="top__button__content">
                        <Link href="/videos">もっと見る</Link>
                    </button>
                </div>
            </div>
        </section >
    )
}