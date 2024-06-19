import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';


export default function Use() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <div className='lg:inline-block hidden'><TopSlider /></div>
            <div className='lg:hidden'><TopSliderMobile /></div>
            <BottomNav />
            <main className="grow bg-[#ffffff] px-4 lg:px-20">
                <div className='pt-8 mx-6'>
                    <div className='pt-1'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>1. Webにてご予約</h3>
                        <p className='text-center py-8 tracking-[4px] leading-[28px]'>空き状況確認＆ご予約は<br /><Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className='underline font-bold' target='_blank'>こちら</Link>から</p>
                        <h3 className='font-semibold text-[15px] text-center'>【お支払い方法について】</h3>
                        <p className='py-4 text-[15px] tracking-[4px] text-center leading-[28px]'>クレジットカードのみの<br />ご対応となります。
                            <br />
                            決済完了後に<br />ご予約完了となります。
                            <br /><br />
                            何日前からでも<br />ご予約可能ですが、<br />キャンセルの場合には<br />3.6%の返金手数料が<br />発生いたしますので<br />ご注意ください。
                            <br />
                            <br />
                            キャンセル時の返金規定は<br /><Link href='/price/#policy' className='underline font-bold'>こちら</Link>から
                        </p>
                    </div>
                    <div className='pt-6'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>2.当日ご利用（ご入室）</h3>
                        <p className='py-8 text-[15px] tracking-[4px] text-center leading-[28px]'>ご利用時刻になりましたら、<br />スタジオ扉に設置された<br />オートロックを解除し<br />ご入室ください。<br /><br />※オートロック解除キーは<br />ご予約時間の５分前より<br />使用可能です。<br />
                            <br />
                            オートロック解除キーは、<br />ご予約完了メールに<br />記載されております<br />5桁の数字です。<br />
                            <br />
                            必ず数字を入力した後に<br />上部の「RemoteLOCK」<br />ボタンを押してください。<br />
                            <br />
                            例：解除キーが12345の場合
                            <br /><br />
                            「12345 RemoteLOCK」<br />と押してください。<br />
                            <br />
                            時間内に再入場の場合にも<br />同じ解除キーを<br />ご使用ください。<br />
                            <br />
                            必ずオートロック扉と<br />内側の扉が確実に<br />閉まったことを確認した上で<br />ご利用ください。<br />
                            画像
                        </p>
                    </div>
                    <div>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>3.当日ご利用（ご退室）</h3>
                        <p className='py-8 text-[15px] tracking-[4px] text-center leading-[28px]'>次の方のご予約時間が<br />毎時00分から始まります。<br /><br />入れ替え時間もありますので、<br />必ず終了時間の5分前には<br />ご退出いただくよう<br />ご協力お願いいたします。
                            <br />
                            <br />
                        </p>
                        <div className='text-center'>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>免責事項</h3>
                            <br />
                            <p className='py-8 text-[15px] tracking-[4px] text-center leading-[28px]'>完全無人スタジオのため、<br />突発的な機材トラブル等に対して、その場ですぐにご対応できない場合がございます。<br /><br />そのような場合にも利用料金が発生してしまうことを予めご了承いただいた上で、ご利用いただきますようお願いいたします。</p>
                            <p className='pb-8 underline'><Link href="/">利用規約</Link></p>
                        </div>
                    </div>
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