import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';

import { Footer } from '@/components/Footer';

import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';


export default function Terms() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <div className='lg:hidden block'>
                <BottomNav />
            </div>
            <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center">
                <div>
                    <h3 className='py-8'>特定商取引法に基づく表記</h3>
                    <h4 className='pb-2 font-bold'>運営業者</h4>
                    <p className='pb-2'>ピアノスタジオ リュバン</p>
                    <h4 className='pb-2 font-bold'>代表責任者</h4>
                    <p className='pb-2'>赤星 里奈</p>
                    <h4 className='pb-2 font-bold'>所在地</h4>
                    <p className='pb-2'>〒179-0081 東京都練馬区北町6-37-3 1階</p>
                    <h4 className='pb-2 font-bold'>電話番号</h4>
                    <p className='pb-2'>電話番号については<br />「お問い合わせ先メールアドレス」にて<br />ご請求をいただければ、<br />遅滞なく開示いたします。</p>
                    <h4 className='pb-2 font-bold'>メールアドレス</h4>
                    <p className='pb-2'>contact@ruban-de-musique.com</p>
                    <h4 className='pb-2 font-bold'>利用価格</h4>
                    <p className='pb-2'>利用価格は、<br />表示された金額（消費税込）と致します。</p>

                    <h4 className='pb-2 font-bold'>代金の支払時期と方法</h4>
                    <p className='pb-4 text-[14px]'>
                        支払方法：クレジットカードによる決済
                        <br />
                        支払時期：クレジットカード利用の承認が下り次第、すみやかにスタジオ利用キーを発行します。
                    </p>
                    <h4 className='pb-2 font-bold'>キャンセル規定</h4>
                    <p className='pb-4 text-[14px]'>
                        利用日の1週間前まで：ご利用料金の3.6%
                        <br />
                        利用日の2～6日前まで：ご利用料金の50%
                        <br />
                        利用日の前日、当日：ご利用料金の100％
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