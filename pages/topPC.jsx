import * as React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ScrollRevealContainer = dynamic(
    import('@/components/ScrollReveal'),
    { ssr: false, }
);

const ScrollRevealContainer2 = dynamic(
    import('@/components/ScrollReveal2'),
    { ssr: false, }
);

export default function TopPc() {
    return (
        <main className="grow bg-[#fefaff] px-40">
            <div className='flex justify-center'>
                <h4 className='anim-box'><img src="/photo/senren1.png" /></h4>
            </div>
            <div className='mx-6 flex sm:pt-8 justify-center'>
                <p className='text-center mt-8 tracking-[2px] leading-[40px] text-[30px]'>
                    東京メトロ有楽町線、副都心線
                    <br />
                    平和台駅から徒歩5分
                    <br />
                    池袋駅から18分とアクセスも良く
                    <br />
                    お気軽にご利用いただける<br />ピアノスタジオです
                </p>
                <h2 className='pt-2 w-[60%] ml-8'><img src="photo/top4.jpg" /></h2>
            </div>
            <div className='mx-6 flex pt-8 pb-20 justify-center'>
                <h2 className='pb-8 w-[60%] mt-20 mr-10'><img src="photo/top6.jpg" /></h2>
                <p className='text-center mt-20 tracking-[2px] leading-[40px] text-[28px]'>
                    内装は白を基調とした
                    <br />
                    エレガントでヨーロッパ調の空間。
                    <br />
                    吸音されるデッドな空間ではなく
                    <br />
                    とてもよく響くスタジオです
                    <br />
                    いつもと違った空間で
                    <br />
                    練習、レッスン、音楽を<br />お楽しみください
                </p>
            </div>
            <div className='py-6 flex justify-center'>
                <ScrollRevealContainer><h2 className='text-[30px] tracking-[2px] pb-10 '><img src="photo/riyou.png" /></h2></ScrollRevealContainer>
            </div>
            <div className='pb-10 text-center'>
                <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d] text-[50px]'>1. Webにて予約、お支払い</h3></ScrollRevealContainer2>
            </div>
            <div className='pb-10 text-center'>
                <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d] text-[50px]'>2. オートロックを解除し入室</h3></ScrollRevealContainer2>
            </div>
            <div className='text-center'>
                <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d] text-[50px]'>3. 手続き等なくご利用終了♪</h3></ScrollRevealContainer2>
            </div>
            <div className='mx-6 pt-10'>
                <p className='text-center tracking-[4px] leading-[28px] text-[25px] pt-6 pb-10'>
                    より詳細なご利用の流れは<Link href="/use" class="underline font-bold">こちら</Link>をご覧ください。
                </p>
            </div>

            <div className='mx-6 flex justify-center pt-20'>
                <ScrollRevealContainer><h2 className='text-[30px] tracking-[2px] pb-10'><img src="photo/riyou1.png" /></h2></ScrollRevealContainer>
            </div>
            <div className='mx-6 mt-10'>
                <p className='text-center tracking-[4px] leading-[28px] text-[25px]'>
                    ピアノは2024年に全弦全ハンマー取り替え済の
                    <strong>YAMAHA C3B</strong>を設置。
                    <br /><br />

                    小さなサロンとしてもご利用いただけるよう、

                    <strong>聴講用イス、折りたたみ机</strong><br /><br />

                    合わせにもご利用いただけるよう
                    <strong>演奏者用椅子、譜面台</strong><br /><br />

                    各種撮影にご利用いただけるよう
                    <strong>照明、カメラマイクスタンド</strong><br /><br />

                    また配信にも十分な超高速10Gインターネットも
                    完備しております。<br /><br />
                    飲食も可能ですので（条件あり）
                    小さな交流会にもご利用いただけます♪<br />
                    <br /><br />
                    設備、備品に関して詳しくは<Link href="/studio/#equipment" class="underline font-bold">こちら</Link>をご覧ください。
                </p>
            </div>
            <h2 className='pt-20 flex justify-center'><img src="photo/top8.jpg" /></h2>
            <div className='mx-6 pt-10 pb-10'>
                <p className='text-center tracking-[4px] leading-[28px] text-[px]'>
                    オーナーが大切に<br />こだわって作った空間です。
                    <br />
                    このスタジオを<br />大切に思ってくださる<br />
                    愛ある音楽愛好家の皆さまに<br />
                    ご利用いただければ幸いです。<br />
                    この空間を通して、<br />新しいつながりや<br />
                    ワクワクする音楽体験が<br />生まれることを<br />
                    心から願っております。
                </p>
            </div>
        </main >
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