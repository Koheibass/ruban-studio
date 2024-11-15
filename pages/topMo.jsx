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

export default function TopMo() {
  return (
    <main className="grow bg-[#ffffff] lg:px-20">
      <h4 className='anim-box'><img src="/photo/senren1.png" /></h4>
      <div className='mx-6'>
        <p className='text-center py-6 tracking-[4px] leading-[28px] text-[14px]'>
          東京メトロ有楽町線、副都心線
          <br />
          平和台駅から徒歩5分
          <br />
          池袋駅から18分とアクセスも良く
          <br />
          お気軽にご利用いただける<br />ピアノスタジオです
        </p>
      </div>
      <h2 className='pt-2'><img src="photo/top4.jpg" /></h2>
      <div className='mx-6'>
        <p className='text-center py-8 tracking-[4px] leading-[28px] text-[14px]'>
          内装は白を基調とした
          <br />
          エレガントでヨーロッパ調の空間
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
      <h2 className='pb-8'><img src="photo/top6.jpg" /></h2>
      <div className='mx-6 text-center py-6'>
        <ScrollRevealContainer><h2 className='text-[20px] tracking-[2px] font-semibold pb-8'><img src="photo/riyou.png" /></h2></ScrollRevealContainer>
      </div>
      <div className='pb-8 text-center'>
        <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 pr-[24px] tracking-[4px] text-[#6c4b2d]'>1. Webにて予約、お支払い</h3></ScrollRevealContainer2>
      </div>
      <div className='pb-8 text-center'>
        <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>2. オートロックを解除し入室</h3></ScrollRevealContainer2>
      </div>
      <div className='text-center'>
        <ScrollRevealContainer2><h3 className='font-bold bg-[#F5DAE6] inline-block px-2 py-2 tracking-[4px] text-[#6c4b2d]'>3. 手続き等なくご利用終了♪</h3></ScrollRevealContainer2>
      </div>
      <div className='mx-6 pt-8'>
        <p className='text-center tracking-[4px] leading-[28px] text-[16px]'>
          より詳細なご利用の流れは
          <br />
          <Link href="/use" class="underline font-bold">こちら</Link>をご覧ください
        </p>
      </div>
      <h2 className='pt-10'><img src="photo/top7.jpg" /></h2>
      <div className='mx-6 text-center pt-14'>
        <ScrollRevealContainer><h2 className='text-[20px] tracking-[2px] font-semibold pb-8'><img src="photo/riyou1.png" /></h2></ScrollRevealContainer>
      </div>
      <div className='mx-6'>
        <p className='text-center tracking-[4px] leading-[28px] text-[14px]'>
          ピアノは2024年に<br />全弦全ハンマー取り替え済の
          <br />
          <strong>YAMAHA C3B</strong>を設置
          <br /><br />

          小さなサロンとしても
          <br />
          ご利用いただけるよう、
          <br />
          <strong>聴講用イス、折りたたみ机</strong><br /><br />

          合わせにもご利用いただけるよう<br />
          <strong>演奏者用椅子、譜面台</strong><br /><br />

          各種撮影にご利用いただけるよう<br />
          <strong>スタンド、マイクケーブル</strong><br /><br />

          また配信にも十分な<br />超高速10Gインターネットも<br />
          完備しております<br />
          飲食も可能ですので（条件あり）<br />
          小さな交流会にも<br />ご利用いただけます♪<br />
          <br />
          設備、備品に関して<br />詳しくは<Link href="/studio/#equipment2" class="underline font-bold">こちら</Link>をご覧ください
        </p>
      </div>
      <h2 className='pt-11'><img src="photo/top8.jpg" /></h2>
      <div className='mx-6 pt-10 pb-10'>
        <p className='text-center tracking-[4px] leading-[28px] text-[14px]'>
          オーナーが大切に<br />こだわって作った空間です
          <br />
          このスタジオを<br />大切に思ってくださる<br />
          愛ある音楽愛好家の皆さまに<br />
          ご利用いただければ幸いです<br />
          この空間を通して、<br />新しいつながりや<br />
          ワクワクする音楽体験が<br />生まれることを<br />
          心から願っております
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