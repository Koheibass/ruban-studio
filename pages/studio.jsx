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
                    <p>東京メトロ有楽町線、副都心線 平和台駅から徒歩5分のピアノスタジオ

                        東京都内の主要駅からのアクセスも良く、お気軽にご利用いただけるスタジオです。

                        白基調のエレガントな内装にもこだわっており、写真撮影や動画撮影はもちろん、いつもと違うヨーロピアンな空間で練習をお楽しみいただけます。

                        完全無人スタジオで、スタッフと顔を合わせることなくご利用可能です。（防犯カメラあり）

                        ご予約時間のみ有効の暗証番号式ロックを採用しているため、前の方が鍵を置き忘れて入室できない…といったトラブルもありません。
                    </p>
                    <br />
                    <p>設置ピアノ

                        YAMAHA C3B

                        全ハンマー、全弦を新品に交換済（2024年）

                        ピアノ弦はドイツ製の大変質の良いものを使用しています。

                        この弦は世界トップクラスの高級輸入ピアノによく使用されており、柔軟性に富んだ輝きのある響きが特徴です。

                        まろやかに響く音で、練習、レッスンをお楽しみください。また録音にも適しており、美しい響きと音質でお録りいただけます。
                    </p>
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