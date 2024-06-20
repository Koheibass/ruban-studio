import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';


export default function Use() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <div className='lg:hidden block'>
                <BottomNav />
            </div>
            <main className="grow bg-[#ffffff] px-4 lg:px-20" id="use">
                <div className='pt-8 mx-6'>
                    <div className='pt-1'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>1. Webにてご予約</h3>
                        <p className='text-center py-8 tracking-[4px] leading-[28px]'>空き状況確認＆ご予約は<br /><Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className='underline font-bold' target='_blank'>こちら</Link>から</p>
                        <p className='text-[11px] leading-[22px] pb-4'>・ご予約完了メールは必ず保存をお願いします<br />
                            ・お支払いはクレジットカードのみのご対応となります<br />
                            ・決済完了後にご予約完了となります<br />
                            ・1日前まで予約が可能です。当日予約はできません<br />
                            ・何日前からでも予約が可能ですが、<br />　キャンセルの場合には3.6％の決済手数料がかかってしま<br />　います。ご注意ください<br />
                            ・キャンセル規定<br />　1週間前まで：スタジオ代金の3.6%<br />　3〜6日前まで：スタジオ代金の50%<br />　当日、前日、前々日：スタジオ代金の100％
                        </p>
                    </div>
                    <div className='pt-6'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>2.当日ご利用（ご入室）</h3>
                        <p className='py-8 text-[15px] tracking-[4px] text-center leading-[28px]'>ご利用時刻になりましたら、<br />スタジオ扉に設置された<br />オートロックを解除し<br />ご入室ください。</p>
                        <h4 className='text-center'>入室方法動画</h4><br />
                        <h4 className='text-center'>入室手順</h4>
                        <p className='py-8 tracking-[4px] leading-[28px]'>

                            1. ご予約完了メールに記載されている5桁の数字と「オートロック解除キー」を入力する
                            <br /><br />
                            2. 数字入力後、上部の「RemoteLOCK」ボタンを押す
                            <br />
                            例：解除キーが12345の場合「12345 RemoteLOCK」 と押してください
                            <br /><br />
                            3. ドアノブを上方向に上げ、<br />入室する
                            <br />
                            ※必ず数字を入力後にドアノブを開けてください
                            <br /><br />
                            4. 外側扉の鍵を閉める<br /><br />
                            5. マットの上で靴を脱ぎ、シューズラックに置き、スリッパに履き替える<br /><br />
                            6. 内側扉を閉め、お楽しみください♪<br />
                        </p>
                        <p className='pt-4 text-[11px] leading-[22px] pb-8'>
                            ・オートロック解除キーはご予約時間の５分前より使用可能です。<br />
                            ・オートロック解除キーは、ご予約完了メールに記載されております5桁の数字です。<br />
                            ・ご予約時間内であれば解除キーはいつでも使用可能です。<br />時間内に再入場の場合にも同じ解除キーをご使用ください。ご予約時間が終了しますと使用できなくなります。<br />
                            ・必ずオートロック扉と内側の扉が確実に閉まったことを確認した上でご利用ください。<br />
                        </p>
                    </div>
                    <div>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>3.当日ご利用（ご退室）</h3>
                        <p className='pt-8 pb-4 text-[14px] tracking-[4px] text-center leading-[28px]'>元の状態に片付けていただき、<br />そのままご退出ください。<br />またのご利用をお待ちしています♪</p>
                        <p className='pt-4 text-[11px] leading-[22px] pb-8'>
                            ・ロックのかけ方など退室方法詳細はスタジオの扉面に記載していますので当日ご確認ください<br />
                            ・次の方のご予約時間が毎時00分から始まります<br />入れ替え時間もありますので<strong>必ず終了時間の5分前</strong>にはご退出いただくようご協力お願いいたします
                        </p>
                        <div className='text-center'>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>免責事項</h3>
                            <br />
                            <p className='py-8 text-[13px] tracking-[4px] leading-[28px]'>完全無人スタジオのため、突発的な機材トラブル等に対して、その場ですぐにご対応できない場合がございます。そのような場合にも利用料金が発生してしまうことを予めご了承いただいた上で、ご利用お願いいたします。</p>
                            <p className='pb-8 underline'><Link href="/useterms">利用規約</Link></p>
                        </div>
                    </div>
                </div>
            </main >
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