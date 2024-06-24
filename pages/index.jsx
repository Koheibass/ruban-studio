import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import TopSliderMobile from '@/components/TopSliderMobile';
import TopMo from './topMo';
import TopPc from './topPC';


export default function Home() {
  return (
    <div className="flex flex-col relativ min-h-lvh font-noto">
      <AppNav />
      <div className='sm:block hidden'><TopSlider /></div>
      <div className='sm:hidden'><TopSliderMobile /></div>
      <div className='sm:hidden block'><BottomNav /></div>
      <div className='lg:hidden'><TopMo /></div>
      <div className='lg:block hidden'><TopPc /></div>
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