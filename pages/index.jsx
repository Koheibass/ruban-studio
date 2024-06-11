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
          <h4 className='pt-4'><img src="/photo/studiotitle.jpg" /></h4>
          <div className='py-8'>
            <p className='font-Rock font-thin pb-1 tracking-wider'>東京メトロ有楽町線、副都心線 平和台駅から徒歩5分のピアノスタジオ
              東京都内の主要駅からのアクセスも良く、お気軽にご利用いただけるスタジオです。
            </p>
          </div>
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