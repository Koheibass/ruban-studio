import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';

import dynamic from 'next/dynamic';

const ScrollRevealContainer = dynamic(
    import('@/components/ScrollReveal'),
    { ssr: false, }
);

export default function Access() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto text-center">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <div className='lg:hidden block'>
                <BottomNav />
            </div>
            <main className="grow bg-[#ffffff] px-4 lg:px-20 lg:block hidden" id="access">
                <div className='pt-8'>
                    <div className='py-10 flex justify-center'>
                        <ScrollRevealContainer><div className='flex justify-center'>
                            <h2 className='w-[80%]'><img src="photo/access1.png" /></h2>
                        </div></ScrollRevealContainer>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-center tracking-[5px] leading-[55px] text-[30px]'>東京メトロ有楽町線、副都心線<br />平和台駅から徒歩5分</p>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-center pt-10 tracking-[5px] leading-[55px] text-[30px]'>駐車場はございません</p>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[25px] pb-12 mr-1'>（近隣にコインパーキングあり）</p>
                    </div>
                    <div className='flex justify-center pb-12 w-full'><iframe width="720" height="360" src="https://www.youtube.com/embed/YfyZ2WkeirI?si=M80V7uaPJU3V1crY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className='flex justify-center py-12'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.647445545132!2d139.6506195!3d35.759115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed4088e6e60d%3A0x1cc03abea33f6f6f!2z44OU44Ki44OO44K544K_44K444Kq44Oq44Ol44OQ44Oz!5e0!3m2!1sja!2sjp!4v1717300015844!5m2!1sja!2sjp" width="720" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
                <div className='pt-2 pb-12 leading-[28px] text-[20px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
            </main >
            <main className="grow bg-[#ffffff] px-4 lg:px-20 lg:hidden" id="access">
                <div className='pt-8'>
                    <div className='pb-8'>
                        <ScrollRevealContainer><div className='flex justify-center'>
                            <h2 className='w-[80%]'><img src="photo/access1.png" /></h2>
                        </div></ScrollRevealContainer>
                        <p className='text-center pt-8 tracking-[4px] leading-[28px]'>東京メトロ有楽町線、副都心線<br />平和台駅から徒歩5分</p>
                        <p className='text-center pt-4 tracking-[4px] leading-[28px]'>駐車場はございません</p>
                        <p className='text-[15px] pb-2 pt-2'>（近隣にコインパーキングあり）</p>
                    </div>
                    <div className='flex justify-center pb-10 w-full'><iframe width="350" height="165" src="https://www.youtube.com/embed/YfyZ2WkeirI?si=M80V7uaPJU3V1crY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className='py-8'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.647445545132!2d139.6506195!3d35.759115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed4088e6e60d%3A0x1cc03abea33f6f6f!2z44OU44Ki44OO44K544K_44K444Kq44Oq44Ol44OQ44Oz!5e0!3m2!1sja!2sjp!4v1717300015844!5m2!1sja!2sjp" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
                <div className='pt-2 pb-6 leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
            </main >
            <Footer />
        </div >
    )
}
/**
 * <h3 className="mb-4 text-center text-[16px] lg:tracking-widest lg:text-[18px] leading-none font-bold pt-4 pb-1 text-[#937a43] font-noto mt-4">
            <div>ご予約</div>
          </h3>
          <iframe src="https://web.star7.jp/reserve_new/mobile_yoyaku_glance.php?p=d09908f508&nodispheadfoot=1" className='border rounded' width="100%" height="520"></iframe>
          <SectionBiography />
          <SectionConcerts />
          <SectionMedia />
          <SectionRecordings />
          <SectionContact />
 */