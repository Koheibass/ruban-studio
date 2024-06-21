import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';

import { Footer } from '@/components/Footer';

import BottomNav from '@/components/BottomNav';
import Link from 'next/link';


export default function useTerms() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <TopSlider />
            <BottomNav />
            <main className="">
                <img src="/photo/termslong2.jpg" />
                <Link href="https://drive.google.com/file/d/1wHJBc_bKXQD0e_ZTu5SbjvGZ16OVhCb9/view?usp=drive_link" download>PDFダウンロード</Link>
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