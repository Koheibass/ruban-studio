import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';

import dynamic from 'next/dynamic';

const ScrollRevealContainer = dynamic(
    import('@/components/ScrollReveal'),
    { ssr: false, }
);


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
                    <div className='pt-1 text-center'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>1. Webにてご予約</h3>
                        <p className='text-center py-8 tracking-[4px] leading-[28px]'>空き状況確認＆ご予約は<br /><Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className='underline font-bold' target='_blank'>こちら</Link>から</p>
                        <p className='text-[12px] tracking-[1px] leading-[22px] pb-4 text-left'>・ご予約完了メールは必ず保存をお願いします<br />
                            ・お支払いはクレジットカードのみの<br />　ご対応となります<br />
                            ・決済完了後にご予約完了となります<br />
                            ・そのため、キャンセルとなった場合には<br />　下に定めるキャンセル料を差し引いた金額を<br />　ご返金いたします。<br />
                            ・1日前まで予約が可能です。<br />　当日予約はできません<br />
                            ・180日前から予約が可能ですが、<br />　キャンセルの場合には3.6％の決済手数料が<br />　かかってしまいます。ご注意ください<br />
                        </p>
                        <p className='text-[12px] tracking-[1px] leading-[22px] pb-4 text-center'>
                            キャンセル規定<br />利用日の1週間前まで：ご利用料金の3.6%
                            <br />
                            利用日の2～6日前まで：ご利用料金の50%
                            <br />
                            利用日の前日、当日：ご利用料金の100％
                        </p>
                    </div>
                    <div className='pt-6 text-center'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>2.当日ご利用（ご入室）</h3>
                        <p className='py-8 text-[15px] tracking-[4px] text-center leading-[28px]'>ご利用時刻になりましたら、<br />スタジオ扉に設置された<br />オートロックを解除し<br />ご入室ください。</p>
                        <div className='flex justify-center pb-10 w-full'><iframe width="350" height="165" src="https://www.youtube.com/embed/gPCwPIcN1l8?si=fDwutWf976yY_GzX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <ScrollRevealContainer><div className='flex justify-center'>
                            <h2 className='w-[50%]'><img src="photo/tejun.png" /></h2>
                        </div></ScrollRevealContainer>
                        <div className='py-8 tracking-[4px] leading-[28px] text-center'>
                            <p className='pb-6'>
                                1. ご予約完了メールに<br />記載されている<br />5桁の数字と<br />「オートロック解除キー」を<br />入力する
                                <br />
                            </p>
                            <p className='pb-3'>
                                2. 数字入力後、上部の<br />「RemoteLOCK」ボタンを押す
                            </p>
                            <p className='pb-6'>
                                例：解除キーが12345の場合「12345 RemoteLOCK」 <br />と押してください
                            </p>
                            <p className='pb-3'>
                                3. ドアノブを上方向に上げ、<br />入室する
                            </p>
                            <p className='pb-6'>
                                <strong>※必ず数字を入力後にドアノブを開けてください</strong>
                            </p>
                            <p className='pb-6'>
                                4. 外側扉の鍵を閉める
                            </p>
                            <p className='pb-6'>
                                5. マットの上で靴を脱ぎ、<br />シューズラックに置き、<br />スリッパに履き替える
                            </p>
                            <p className='pb-3 text-[15px]'>
                                6. 内側扉を閉め、<br />お楽しみください♪
                            </p>
                        </div>
                        <p className='text-[12px] tracking-[1px] leading-[22px] pb-4 text-left'>
                            ・オートロック解除キーはご予約時間の５分前<br />　より使用可能です。<br />
                            ・オートロック解除キーは、ご予約完了メールに<br />　記載されております5桁の数字です。<br />
                            ・ご予約時間内であれば解除キーは<br />　いつでも使用可能です。<br />　時間内に再入場の場合にも同じ解除キーを<br />　ご使用ください。<br />　ご予約時間が終了しますと使用できなく<br />　なります。<br />
                            ・必ずオートロック扉と内側の扉が<br />　確実に閉まったことを確認した上で<br />　ご利用ください。<br />
                        </p>
                    </div>
                    <div className='pt-6 text-center'>
                        <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>3.当日ご利用（ご退室）</h3>
                        <p className='pt-8 pb-4 text-[14px] tracking-[4px] text-center leading-[28px]'>元の状態に片付けていただき、<br />そのままご退出ください。<br />またのご利用をお待ちしています♪</p>
                        <p className='text-[12px] tracking-[1px] leading-[22px] pb-4 text-left'>
                            ・ロックのかけ方など退室方法詳細は<br />　スタジオの扉面に記載していますので<br />　当日ご確認ください<br />
                            ・次の方のご予約時間が毎時00分から始まります<br />　入れ替え時間もありますので<br />　<strong>必ず終了時間の5分前</strong>にはご退出いただくよう<br />　ご協力お願いいたします
                        </p>
                        <div className='text-center'>
                            <h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>免責事項</h3>
                            <br />
                            <p className='py-8 text-[13px] tracking-[4px] leading-[28px] text-left'>完全無人スタジオのため、突発的な機材トラブル等に対して、その場ですぐにご対応できない場合がございます。そのような場合にも利用料金が発生してしまうことを予めご了承いただいた上で、ご利用お願いいたします。</p>
                            <p className='pb-8 underline'><Link href="/useterms">スタジオ利用規約</Link></p>
                        </div>
                        <div className='pt-2 pb-6 leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
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