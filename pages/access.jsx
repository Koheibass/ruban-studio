import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';


export default function Home() {
    return (
        <LanguageContext.Provider value='ja'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <TopSlider />
                <BottomNav />
                <main className="grow bg-[#fefaff] px-4 lg:px-20">
                    <p>東京メトロ有楽町線、副都心線 平和台駅から徒歩5分</p>
                    <p>東京都練馬区北町6-37-3

                        東京メトロ有楽町線平和台駅より徒歩5分

                        駐車場はございません。

                        （近隣にコインパーキングあり）</p>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.647445545132!2d139.6506195!3d35.759115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed4088e6e60d%3A0x1cc03abea33f6f6f!2z44OU44Ki44OO44K544K_44K444Kq44Oq44Ol44OQ44Oz!5e0!3m2!1sja!2sjp!4v1717300015844!5m2!1sja!2sjp" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </main>
                <Footer />
            </div >
        </LanguageContext.Provider>
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