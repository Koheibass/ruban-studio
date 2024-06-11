import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';


export default function Access() {
    return (
        <LanguageContext.Provider value='ja'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <TopSlider />
                <BottomNav />
                <main className="grow bg-[#fefaff] px-4 lg:px-20 tracking-[4px] leading-7 text-center">
                    <div className='pt-2 px-20'>
                        <strong className='text-[#766335] font-cormo font-bold text-[20px]'>Address</strong>
                    </div>
                    <div className='px-6 text-[14px]'>
                        <p className='pt-4 text-[px] pb-2'>東京都練馬区北町6-37-3</p>
                        <div className='pt-2 px-20'>
                            <strong className='text-[#766335] font-cormo font-bold text-[20px]'>Access</strong>
                        </div>
                        <p className='text-left pt-4'>東京メトロ有楽町線、副都心線<br />平和台駅から徒歩5分</p>
                        <br />
                        <div className='pt-2 px-20'>
                            <strong className='text-[#766335] font-cormo font-bold text-[20px]'>Attention</strong>
                        </div>
                        <p className='text-left pt-4'>駐車場はございません。</p>
                        <p className='text-[13px] pr-3 pb-8'>（近隣にコインパーキングあり）</p>
                    </div>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.647445545132!2d139.6506195!3d35.759115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed4088e6e60d%3A0x1cc03abea33f6f6f!2z44OU44Ki44OO44K544K_44K444Kq44Oq44Ol44OQ44Oz!5e0!3m2!1sja!2sjp!4v1717300015844!5m2!1sja!2sjp" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </main>
                <Footer />
            </div >
        </LanguageContext.Provider >
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