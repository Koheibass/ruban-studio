import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import TopSliderMobile from '@/components/TopSliderMobile';

import dynamic from 'next/dynamic';
import UseMo from './useMo';

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
            <main className="grow bg-[#ffffff] px-4 lg:px-20 lg:block hidden" id="usepc">
                <div className='pt-8 mx-6'>
                    <div className='py-10 flex justify-center'>
                        <ScrollRevealContainer><h2 className='text-[20px] tracking-[2px] font-semibold'><img src="photo/nagare.png" /></h2></ScrollRevealContainer>
                    </div>
                    <div className='py-10 flex justify-center'>
                        <h3 className='font-bold bg-[#F5DAE6] px-5 py-3 leading-[60px] text-[28px] tracking-[24px] text-[#6c4b2d]'>1. Webにてご予約</h3>
                    </div>
                    <div>
                        <p className='text-center py-8 tracking-[10px] leading-[40px] text-[35px]'>空き状況確認＆ご予約は<Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className='underline font-bold' target='_blank'>こちら</Link>から</p>
                    </div>
                    <div className='py-20 ml-[150px]'>
                        <p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・ご予約完了メールは必ず保存をお願いします。<br /></p>
                        <p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・お支払いはクレジットカードのみのご対応となります。<br /></p>
                        <p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・決済完了後にご予約完了となります。<br /></p>
                        <p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・そのため、キャンセルとなった場合には下に定めるキャンセル料を差し引いた金額をご返金いたします。<br /></p>
                        {/*<p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・前日の23：59まで予約が可能です。当日予約はできません。<br /></p>*/}
                        <p className='text-[25px] tracking-[3px] leading-[35px] pb-10 text-left -indent-7'>・180日前から予約が可能ですが、キャンセルの場合には3.6％の決済手数料がかかってしまいます。ご注意ください。<br /></p>
                    </div>
                    <p className='text-[40px] tracking-[2px] leading-[24px] py-6 text-center'>
                        キャンセル規定<br />
                    </p>
                    <p className='text-[30px] tracking-[5px] leading-[50px] py-4 text-center'>利用日の1週間前まで：ご利用料金の3.6%
                        <br />
                        利用日の2～6日前まで：ご利用料金の50%
                        <br />
                        利用日の前日、当日：ご利用料金の100％
                    </p>
                </div>
                <div className='py-10 mt-10 text-center'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold bg-[#F5DAE6] px-5 py-3 leading-[60px] text-[28px] tracking-[24px] text-[#6c4b2d]'>2. 当日ご利用（ご入室）</h3>
                    </div>
                    <div className='flex justify-center'>
                        <p className='py-12 my-12 text-[30px] tracking-[10px] text-center leading-[50px]'>ご利用時刻になりましたら<br />スタジオ扉に設置された<br />オートロックを解除し<br />ご入室ください</p>
                    </div>
                    <div className='flex justify-center pb-10 w-full'><iframe width="720" height="360" src="https://www.youtube.com/embed/gPCwPIcN1l8?si=fDwutWf976yY_GzX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <ScrollRevealContainer><div className='flex justify-center pb-12'>
                        <h2 className='w-[50%] flex justify-center mt-10 pt-10'><img src="photo/tejun.png" /></h2>
                    </div></ScrollRevealContainer>
                    <div className='py-12 mt- tracking-[5px] leading-[45px] text-left -indent-12 px-6 ml-[200px] text-[30px]'>
                        <p className='pb-12'>
                            1. ご予約完了メールに記載されている5桁の数字「オートロック解除キー」を入力する
                            <br />
                        </p>
                        <p className='pb-6'>
                            2. 数字入力後、上部の「RemoteLOCK」ボタンを押す
                        </p>
                        <p className='pb-12 text-[20px] tracking-[2px] leading-[22px] ml-12'>
                            （例：解除キーが12345の場合「12345 RemoteLOCK」と押してください）
                        </p>
                        <p className='pb-6'>
                            3. ドアノブを上方向に上げ、入室する
                        </p>
                        <p className='pb-12 ml-12 text-[20px]'>
                            <strong>（※必ず数字を入力後にドアノブを開けてください）</strong>
                        </p>
                        <p className='pb-12'>
                            4. 外側扉のドアノブと鍵を閉める
                        </p>
                        <p className='pb-12'>
                            5. マットの上で靴を脱ぎ、シューズラックに置き、スリッパに履き替える
                        </p>
                        <p className='pb-6'>
                            6. 内側扉を閉め、お楽しみください♪
                        </p>
                    </div>
                    <div className='px-6 ml-[100px]'>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・オートロック解除キーはご予約時間の５分前より使用可能です。<br />
                        </p>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・オートロック解除キーは、ご予約完了メールに記載されております5桁の数字です。<br />
                        </p>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・ご予約時間内であれば解除キーはいつでも使用可能です。時間内に再入場の場合にも同じ解除キーをご使用ください。ご予約時間が終了しますと使用できなくなります。<br />
                        </p>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・必ずオートロック扉と内側の扉が確実に閉まったことを確認した上でご利用ください。<br />
                        </p>
                    </div>
                </div>
                <div className='pt-6 text-center'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold bg-[#F5DAE6] px-5 py-3 leading-[60px] text-[28px] tracking-[24px] text-[#6c4b2d]'>3. 当日ご利用（ご退室）</h3>
                    </div>
                    <p className='py-6 my-12 text-[30px] tracking-[10px] text-center leading-[50px]'>元の状態に片付けていただき<br />そのままご退出ください<br />またのご利用をお待ちしています♪</p>
                    <div className='px-6'>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・利用終了後は、外側扉のドアノブを閉めた後、「RemoteLOCK」ボタンを押して施錠してください。<br />
                        </p>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・ロックのかけ方など退室方法詳細はスタジオの扉面に記載していますので当日ご確認ください。<br />
                        </p>
                        <p className='text-[26px] tracking-[5px] leading-[35px] pb-6 text-left -indent-8'>
                            ・次の方のご予約時間が毎時00分から始まります。入れ替え時間もありますので<strong>必ず終了時間の5分前</strong>にはご退出いただくようご協力お願いいたします。
                        </p>
                    </div>
                    <div className='text-center pt-12 mt-12'>
                        <div className='flex justify-center pb-12'>
                            <h3 className='font-bold bg-[#F5DAE6] px-6 py-3 leading-[60px] text-[28px] tracking-[24px] text-[#6c4b2d]'>免責事項</h3>
                        </div>
                        <p className='py-8 text-[28px] tracking-[8px] leading-[60px] text-left'>完全無人スタジオのため、突発的な機材トラブル等に対して、その場ですぐにご対応できない場合がございます。そのような場合にも利用料金が発生してしまう可能性があることを予めご了承いただいた上で、ご利用お願いいたします。</p>
                        <p className='py-12 underline text-3xl'><Link href="/useterms">スタジオ利用規約</Link></p>
                    </div>
                    <div className='py-6 pb-12 leading-[28px] text-[26px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
                </div>
            </main >
            <UseMo />
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