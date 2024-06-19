import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import TopSliderMobile from '@/components/TopSliderMobile';


export default function Studio() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <BottomNav />
            <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center">
                <div className='pt-8 mx-6'>
                    <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>スタジオについて</h3>
                    <p className='text-center py-8 tracking-[4px] leading-[28px]'>
                        白基調の内装にもこだわっており、写真撮影や動画撮影はもちろん、いつもと違うヨーロピアンな空間で練習をお楽しみいただけます。

                        完全無人スタジオで、スタッフと顔を合わせることなくご利用可能です。（防犯カメラあり）

                        ご予約時間のみ有効の暗証番号式ロックを採用しているため、前の方が鍵を置き忘れて入室できない…といったトラブルもありません。
                    </p>
                    <div className=''>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>Piano</h3>
                    </div>
                    <p className='text-center py-8 tracking-[4px] leading-[28px]'>設置ピアノ

                        YAMAHA C3B

                        全ハンマー、全弦を新品に交換済（2024年）

                        ピアノ弦はドイツ製の大変質の良いものを使用しています。

                        この弦は世界トップクラスの高級輸入ピアノによく使用されており、柔軟性に富んだ輝きのある響きが特徴です。

                        まろやかに響く音で、練習、レッスンをお楽しみください。また録音にも適しており、美しい響きと音質でお録りいただけます。
                    </p>
                </div>
                <div className='pb-6 underline'><Link href="/">Top</Link></div>
            </main>
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