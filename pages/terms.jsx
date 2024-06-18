import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionNews } from '@/components/News/SectionNews';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';


export default function Terms() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <TopSlider />
            <BottomNav />
            <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center">
                <div>
                    <h3>特定商取引法に基づく表記</h3>
                    <h4>販売業者</h4>
                    <p>ピアノスタジオ リュバン</p>
                    <h4>販売責任者</h4>
                    <p>赤星 里奈</p>
                    <h4>所在地</h4>
                    <p>〒179-0081 東京都練馬区北町6-37-3 1階</p>
                    <h4>電話番号</h4>
                    <p>電話番号については「お問い合わせ先メールアドレス」にてご請求をいただければ、遅滞なく開示いたします。</p>
                    <h4>メールアドレス</h4>
                    <p>info@rina-akaboshi.com</p>
                    <h4>販売価格</h4>
                    <p>販売価格は、表示された金額（憑依価格/消費税込）と致します。</p>

                    <h4>代金の支払時期と方法</h4>
                    <p>
                        支払方法：クレジットカードによる決済

                        支払時期：クレジットカード利用の承認が下り次第、すみやかにスタジオ利用キーを発行します。
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