import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';


export default function Price() {
    return (
        <LanguageContext.Provider value='ja'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <div className='lg:inline-block hidden'><TopSlider /></div>
                <div className='lg:hidden'><TopSliderMobile /></div>
                <BottomNav />
                <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center">
                    <div className='pt-8 mx-6'>
                        <div className='pt-1'>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>ご利用料金</h3>
                            <p className='text-center py-8 tracking-[4px] leading-[28px]'>オープニング記念価格！</p>
                            <p className='text-[14px] tracking-[4px] text-center leading-[28px] pb-8'> 何曜日でも何時でも、<br /><br />1時間2,000円です。
                                <br /><br />
                                ぜひこの機会にご利用ください！！
                                <br />
                                （※録音、配信プランを除く）</p>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>キャンセル規定</h3>
                            <p className='py-4 text-[11px] tracking-[4px] text-center leading-[28px]'>
                                1週間前まで：3.6%
                                <br />
                                3〜6日前まで：スタジオ代金50%
                                <br />
                                当日、前日、前々日：スタジオ代金100％
                            </p>
                        </div>
                    </div>
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