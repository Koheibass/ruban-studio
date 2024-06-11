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
                <TopSlider />
                <BottomNav />
                <main className="grow bg-[#fefaff] px-4 lg:px-20 tracking-[4px] leading-7">
                    <div className='pt-2 px-20'>
                        <strong className='text-[#766335] font-cormo font-bold text-[20px] px-14'>Price</strong>
                    </div>
                    <div className='px-6 text-[14px]'>
                        <p className='pt-2 text-[px] pb-2'>オープニング記念価格！</p>
                        <p className='text-[px] pb-'> 何曜日でも何時でも、<br />1時間2,000円です。
                            <br />
                            ぜひこの機会にご利用ください！！

                            （※録音、配信プランを除く）</p>
                        <div className='pt-14 px-20'>
                            <strong className='text-[#766335] font-cormo font-bold text-[20px] px-8'>Policy</strong>
                        </div>
                        <p className='pt-2 text-[px] pb-2'>キャンセル規定</p>
                        <p>
                            1週間前まで：3.6%
                            <br />
                            3〜6日前まで：スタジオ代金50%
                            <br />
                            当日、前日、前々日：スタジオ代金100％
                        </p>
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