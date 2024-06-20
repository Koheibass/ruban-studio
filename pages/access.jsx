import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';


export default function Access() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto text-center">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <div className='lg:hidden block'>
                <BottomNav />
            </div>
            <main className="grow bg-[#ffffff] px-4 lg:px-20" id="access">
                <div className='pt-8 mx-6'>
                    <div className='pt-1'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>Address</h3>
                        <p className='text-center py-8 tracking-[4px] leading-[28px]'>東京都練馬区北町6-37-3</p>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>Access</h3>
                        <p className='text-center py-8 tracking-[4px] leading-[28px]'>東京メトロ有楽町線、副都心線<br />平和台駅から徒歩5分</p>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>Attention</h3>
                        <p className='text-center pt-8 tracking-[4px] leading-[28px]'>駐車場はございません。</p>
                        <p className='text-[15px] pl-6 pb-8 pt-2'>（近隣にコインパーキングあり）</p>
                    </div>
                    <div className='pb-8'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.647445545132!2d139.6506195!3d35.759115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed4088e6e60d%3A0x1cc03abea33f6f6f!2z44OU44Ki44OO44K544K_44K444Kq44Oq44Ol44OQ44Oz!5e0!3m2!1sja!2sjp!4v1717300015844!5m2!1sja!2sjp" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
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