import React from 'react'
import { SectionHeader } from "./SectionHeader"
import { TopButton } from "./TopButton"
import { Media } from './Media'

export const SectionMedia = () => {
    const mediaList = [
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

    const [mode, setMode] = React.useState('video') // or image
    const handleClickModeButton = (mode) => {
        if (mode === 'video') {
            setMode('video')
        } else if (mode === 'image') {
            setMode('image')
        }
    }

    return (
        <section class="section_media">
            <SectionHeader id="media" title="メディア" titleEn="Media" />
            <div class="media__button">
                <button
                    id="MovieLeft"
                    className={`movie-button ${mode === 'video' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('video')}
                >
                    動画
                </button>
                <button
                    id="PhotoRight"
                    className={`photo-button ${mode === 'image' ? 'activate' : ''}`}
                    onClick={() => handleClickModeButton('image')} i
                >
                    写真
                </button>
            </div>

            <div class="media__content" id="medialist">
                <div class="media__list">
                    {mediaList.map((media) => (
                        <Media media={media} />
                    ))}
                </div>
                <br />
                <div class="top__button">
                    <TopButton />
                </div>
            </div>
        </section >
    )
}