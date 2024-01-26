import React from 'react'
import { SectionHeader } from "./SectionHeader"
import Link from 'next/link'
import { VideoMedia } from './VideoMedia'
import { ImageMedia } from './ImageMedia'

export const MediaContent = () => {
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
        },
        {
            id: 5,
            title: 'ショパン：舟歌 作品60 嬰ヘ長調',
            videoId: 'Cq0A7z6Ov24',
            thumbnailURL: '/photo/Barcarolle.jpg',
        },
        {
            id: 6,
            title: 'ブラームス：ピアノのための４つの小品 作品119',
            videoId: 'Z89P1TQiEHM',
            thumbnailURL: '/photo/119.jpg',
        },
        {
            id: 7,
            title: 'ベートーヴェン : ピアノソナタ 第21番「ワルトシュタイン」 Op.53 第1楽章',
            videoId: 'K5D_2XrDhiQ',
            thumbnailURL: '/photo/waldstein.jpg',
        },
        {
            id: 8,
            title: 'ブラームス：ピアノのための６つの小品 Op.118',
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
        <section className="section_media">
            <SectionHeader id="media" title="メディア" titleEn="Media" />
            <div className="media__button">
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
                            <ImageMedia key={image.id} image={image} />
                        ))
                    }
                </div>
                <br />
                <div className="return">
                    <Link className="return__content" href="/">Topに戻る</Link>
                </div>
            </div>
        </section >
    )
}