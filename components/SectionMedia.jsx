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
        <section className="pb-8">
            <SectionHeader id="media" title="メディア" titleEn="Media" />
            <div className="flex justify-center my-2">
                <button
                    className={`font-medium text-sm py-1 px-4 border border-solid border-[#937a43] bg-[#fefaff] text-[#937a43] ${mode === 'video' ? 'font-medium text-sm py-1 px-4 border border-solid text-[#ee71bf] bg-[#ffeeee]' : ''}`}
                    onClick={() => handleClickModeButton('video')}
                >
                    動画
                </button>
                <button
                    className={`font-medium text-sm py-1 px-4 border border-solid ml-[15px] border-[#937a43] bg-[#fefaff] text-[#937a43] ${mode === 'image' ? 'font-medium text-sm py-1 px-4 border border-solid ml-[15px] text-[#ee71bf] bg-[#ffeeee]' : ''}`}
                    onClick={() => handleClickModeButton('image')}
                >
                    写真
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
                        <Link href="/videos">もっと見る</Link>
                    </button>
                </div>
            </div>
        </section >
    )
}