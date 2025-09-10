import * as React from 'react';

import Link from 'next/link';


import dynamic from 'next/dynamic';

const ScrollRevealContainer = dynamic(
    import('@/components/ScrollReveal'),
    { ssr: false, }
);


export default function PriceMo() {
    return (
        <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center lg:hidden" id="price">
            <div className='pt-8 mx-6'>
                <div className='pt-1'>
                    <ScrollRevealContainer><h2 className='text-[20px] tracking-[2px] font-semibold pb-'><img src="photo/price1.png" /></h2></ScrollRevealContainer>
                    <h2 className='py-8'><img src="photo/campaign.jpg" /></h2>
                    <p className='text-[14px] tracking-[4px] text-center leading-[28px] pb-8'>
                        ぜひこの機会にご利用ください！！
                        <br />
                        （※録音、録画プランを除く）</p>
                    <h3 className='font-bold inline-block px-2 py-2 tracking-[4px]'>キャンセル規定</h3>
                    <p className='py-4 text-[11px] tracking-[4px] text-center leading-[28px]'>
                        利用日の1週間前まで：ご利用料金の3.6%
                        <br />
                        利用日の2～6日前まで：ご利用料金の50%
                        <br />
                        利用日の前日、当日：ご利用料金の100％
                    </p>
                </div>
            </div>
            <div className='pt-2 pb-6 leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
        </main>
    )
}
/**
 *  <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center" id="price">
                    <div className='pt-8 mx-6'>
                        <div className='pt-1'>
                            <h2 className='text-[20px] tracking-[2px] font-semibold pb-'><img src="photo/price1.png" /></h2>
                            <p className='text-center py-8 tracking-[4px] leading-[28px]'>オープニング記念価格！</p>
                            <p className='text-[14px] tracking-[4px] text-center leading-[28px] pb-8'> 何曜日でも何時でも、<br /><br />1時間2,000円です。
                                <br /><br />
                                ぜひこの機会にご利用ください！！
                                <br />
                                （※録音、配信プランを除く）</p>
                            <h3 className='font-bold inline-block px-2 py-2 tracking-[4px]'>キャンセル規定</h3>
                            <p className='py-4 text-[11px] tracking-[4px] text-center leading-[28px]'>
                                利用日の1週間前まで：ご利用料金の3.6%
                                <br />
                                利用日の2～6日前まで：ご利用料金の50%
                                <br />
                                利用日の前日、当日：ご利用料金の100％
                            </p>
                        </div>
                    </div>
                    <div className='py-2 tracking-[4px] leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
                </main>
 */