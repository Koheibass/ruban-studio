import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';
import BottomNav from '@/components/BottomNav';


export default function Use() {
    return (
        <LanguageContext.Provider value='ja'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <TopSlider />
                <BottomNav />
                <main className="grow bg-[#ffffff] px-4 lg:px-20">
                    <div className='mx-6'>
                        <h4><img src="/photo/use.jpg" /></h4>
                        <div className='pt-1'>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[0.2rem] text-[#6c4b2d]'>1. Webにてご予約</h3>
                            <p className='text-center py-8'>ご予約は<Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className='underline font-bold' target='_blank'>こちら</Link>から</p>

                            <h3 className='font-semibold text-[15px] text-center'>【お支払い方法について】</h3>

                            <p className='py-4 text-[15px] tracking-[0.2rem] text-center'>クレジットカードのみの<br />ご対応となります。
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
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[0.2rem] text-[#6c4b2d]'>2.当日ご利用（ご入室）</h3>

                            <p className='py-8 text-[15px] tracking-[0.2rem] text-center'>ご利用時刻になりましたら、<br />スタジオ扉に設置されたオートロックを解除することができますので、ご入室ください。
                                <br />
                                オートロックの解除キーは、ご予約完了メールに記載されております◯ケタの数字です。
                                <br />
                                必ず数字を入力した後に上部の「RemoteLock」ボタンを押してください。
                                <br />
                                例：解除キーが1234の場合

                                「1234 RemoteLock」と入力
                                <br />
                                時間内に再入場の場合にも同じ解除キーをご使用ください。
                                <br />
                                必ずオートロック扉と内側の扉が確実に閉まったことを確認した上で利用ください。
                            </p>
                        </div>
                        <div>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[0.2rem] text-[#6c4b2d]'>3.当日ご利用（ご退室）</h3>
                            <p className='py-8 text-[15px] tracking-[0.2rem] text-center'>次の方のご予約時間が00分から始まりますので、必ずご予約時間の5分前にはご退出いただくようお願いいたします。
                                <br />
                                <br />
                            </p>
                            <div>
                                <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[0.2rem] text-[#6c4b2d]'>免責事項</h3>
                                <br />
                                <p className='py-8'>完全無人スタジオのため、突発的な機材トラブル等に対して、その場ですぐにご対応できない場合がございます。そのような場合にも利用料金が発生してしまうことを予めご了承いただいた上で、ご利用いただきますようお願いいたします。</p>
                            </div>
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