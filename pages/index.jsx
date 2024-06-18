import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';


export default function Home() {
  return (
    <div className="flex flex-col relative min-h-lvh font-noto">
      <AppNav />
      <TopSlider />
      <BottomNav />
      <main className="grow bg-[#fefaff] px-4 lg:px-20">
        <h4 className='anim-box'><img src="/photo/studiotitle.jpg" /></h4>
        <div className=''>
          <p className='text-center py-8 tracking-[4px] leading-[28px]'>東京メトロ有楽町線、副都心線 平和台駅から徒歩5分の<br />ピアノスタジオ<br />
            東京都内の主要駅からの<br />アクセスも良く、<br />お気軽にご利用いただける<br />スタジオです。
          </p>
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