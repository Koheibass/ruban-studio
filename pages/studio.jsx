import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';

import { Footer } from '@/components/Footer';

import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import TopSliderMobile from '@/components/TopSliderMobile';


export default function Studio() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <div className='sm:inline-block hidden'><TopSlider /></div>
            <div className='sm:hidden'><TopSliderMobile /></div>
            <div className='sm:hidden block'>
                <BottomNav />
            </div>
            <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center lg:block hidden" id="studio">
                <div className='pt-8 mx-6'>
                    <div className='flex justify-center'>
                        <h4 className='anim-box2'><img src="/photo/ryuugaku1.png" /></h4>
                    </div>
                    <div>
                        <p className='text-center py-8 leading-[60px] text-[28px]'>ヨーロッパに留学していたオーナー夫婦が
                            <br />
                            そんな風に考えて作った空間です。
                        </p>
                        <h2 className='pt-2 ml-8 flex justify-center'><img src="photo/sepia.jpg" /></h2>
                        <p className='text-center py-8 leading-[60px] text-[28px]'>
                            <br />
                            日本の防音マンションや防音スタジオは
                            よく吸音され、<br />どちらかというと
                            デットな空間になりがちです。<br />
                            そのような環境での練習を
                            好まれる方も多いかもしれませんが
                            <br />
                            留学先ではよく響く空間が多く
                            <br />
                            そのようなところから学ぶことも
                            たくさんありました。
                            <br />
                            なかなかない、よく響くスタジオで
                            演奏してみませんか？
                        </p>
                    </div>
                    <h2 className='pt-14 ml-8 flex justify-center'><img src="photo/studio1.jpg" /></h2>
                    <div>
                        <p className='text-center py-8 leading-[60px] text-[28px]'>
                            白基調の内装にもこだわっており、写真撮影や動画撮影はもちろん、<br />
                            いつもと違うヨーロピアンな空間で練習をお楽しみいただけます。
                            <br />
                            完全無人スタジオで、スタッフと顔を合わせることなくご利用可能です。（防犯カメラあり）
                            <br /><br />
                            ご予約時間のみ有効の暗証番号式ロックを採用しているため、<br />前の方が鍵を置き忘れて入室できない…といったトラブルもありません。
                        </p>
                        <div className='flex justify-center pt-10'>
                            <p className='text-left tracking-[8px] leading-[55px] ml-28 pb-8 text-[35px]'>
                                ・楽器練習<br />
                                ・レッスン<br />
                                ・セミナー<br />
                                ・録音、動画撮影<br />
                                ・ライブ配信<br />
                                ・プロフィール写真撮影<br />
                                ・コワーキングスペース<br />
                                ・オンラインレッスン<br />
                            </p>
                        </div>
                        <div className='text-2xl py-16 ml-28'>などなど、様々な用途にてご利用ください。</div>
                        <div className='flex justify-center'>
                            <p className='text-left tracking-[4px] leading-[28px] ml-10 pb-10 text-xl'>
                                定員　約10名
                                <br />
                                広さ　25.16㎡（約15畳）
                            </p>
                        </div>
                        <div className='py-10 ml-11'>
                            <p className='text-left tracking-[4px] leading-[45px] ml-20 pb-8 text-[20px] -indent-6' >※完全防音ではありません。外の音はほぼ聞こえませんが、場合によっては大きな音のサイレン等、少し聞こえてしまう場合もございます。<br />そのため、大切なコンクールのための録音などの際は、よく考慮されご納得いただいたうえでご予約いただきますようお願いいたします。
                                <br /><br />
                            </p>
                            <p className='text-left tracking-[4px] leading-[45px] ml-20 pb-8 text-[20px] -indent-6' >
                                ※大変申し訳ありませんが、金管楽器、打楽器は演奏不可とさせていただいております。ご理解のほどお願いいたします。
                            </p>
                        </div>
                    </div>
                    <div className='pt-8 flex justify-center'>
                        <h2 className=''><img src="photo/piano1.png" /></h2>
                    </div>
                    <div className='pb-10'>
                        <div className='py-12'>
                            <p className='text-center py- tracking-[4px] leading-[28px] py-8 text-[50px]'>
                                YAMAHA C3B
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-center pb-8 leading-[60px] text-[28px]'>
                                全ハンマー、全弦を新品に交換済（2024年）<br />

                                ピアノ弦はドイツ製の大変質の良いものを使用しています。<br />

                                この弦は世界トップクラスの高級輸入ピアノによく使用されており、柔軟性に富んだ輝きのある響きが特徴です。
                                <br />
                                まろやかに響く音で、練習、レッスンをお楽しみください。
                            </p>
                        </div>
                    </div>
                    <div id="equipment">
                        <div className='text-center text-3xl'>スタジオ備品一覧</div>
                        <div className='flex justify-center'>
                            <h2 className='pt-12'><img src="photo/bihin.jpg" /></h2>
                        </div>
                        <div className='flex justify-center pt-8'>
                            <p className='text-center pb-8 leading-[60px] text-[28px]'>
                                その他
                                <br />
                                カメラスタンド
                                <br />
                                マイクスタンド
                                <br />
                                マイクケーブル
                                <br />
                                譜面台
                                <br />
                                コンセント8口
                            </p>
                        </div>
                        <div className='flex justify-center pb-12'>
                            <p className='text-center pb-8 leading-[60px] text-[28px]'>
                                高音質マイク（NEUMANN、AKG）
                                <br />
                                高画質カメラ（FUJIFILM X-H2S ）
                                <br />
                                （録音録画プランの時のみ録音技師が使用）
                                <br /><br />
                                本棚に置いてある楽譜や本も、大切に扱っていただけるのであれば、ご自由にご覧ください。
                            </p>
                        </div>
                    </div>
                    <div className='pb-12'>
                        <h4 className='text-center py- tracking-[4px] leading-[28px] py-8 text-[50px]'>スタジオ利用ルール</h4>
                    </div>
                    <div>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・楽器や空間、備品を大切にしてくださる方のみご利用お願いいたします。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・当スタジオは土足禁止です。入ってすぐのマットは土足OKですので必ず靴をお脱ぎください。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・本番用シューズ等でご利用されたい場合、靴の底を拭いた上でご使用いただいてかまいません。<br />ただし、ピンヒールや床が傷つくおそれのあるシューズはお控えください。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・飲食可能です。ただしピアノの側ではなく、入って右側半分のスペースのみでお願いいたします。<br />また飲食された場合、汚れのあるなしにかかわらず利用後に掃除機をかけていただくようお願いいたします。<br />匂いの強い食べ物はNGとします。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・アルコールの持ち込み、酒気帯びの方のご利用は禁止です。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・ペーパータオル以外のゴミはお持ち帰りをお願いしております。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・ピアノの移動は調律の関係で禁止とします。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・ピアノは屋根を開けていただいてかまいませんが、開け方をご存知の場合のみでお願いいたします。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・撮影等の都合でスタジオ内の備品を移動させていただいても構いません（ピアノを除く）。<br />ただし、ご利用終了時に必ず元の位置にお戻しください。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・万が一スタジオ設備や備品を破損、汚損、傷つけられた場合、すみやかにご連絡ください。故意、過失にかかわらず原状回復費は実費でご負担いただきます。ご連絡いただけなかった場合、今後の利用を制限させていただきますのであらかじめご了承ください。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・長時間のご利用の際は、換気を行なってください。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・スタジオ内は禁煙です。火気および危険物の持ち込みは固くお断りいたします。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・スタジオ内で起こった事故、怪我、お客様の持ち込み機材などの破損に関しても当スタジオは一切責任を負いません。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・貴重品の管理は個人の責任でお願いします。万が一紛失、盗難等の事故が生じた場合でも当スタジオは一切責任を負いません。<br />
                        </p>
                        <p className='text-left pb-8 leading-[60px] text-[28px] ml-[100px] -indent-7'>
                            ・当スタジオの名誉もしくは信用を棄損する行為があった場合は即刻退室して頂きます。<br />
                        </p>
                    </div>
                    <div className='text-[30px] py-10'>その他、詳細は<Link href="/useterms" className="underline font-bold">利用規約</Link>を必ずご確認ください。</div>
                </div>
                <div className='pt-2 pb-12 leading-[28px] text-[25px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
            </main >
            <main className="grow bg-[#ffffff] px-4 lg:px-20 text-center lg:hidden" id="studio">
                <div className='pt-8 mx-6'>
                    <div className='flex justify-center'>
                        <h4 className='anim-box2'><img src="/photo/ryuugaku1.png" /></h4>
                    </div>
                    <div>
                        <p className='text-center py-8 leading-[60px] text-[28px]  lg:block hidden'>ヨーロッパに留学していたオーナー夫婦が
                            <br />
                            そんな風に考えて作った空間です。
                        </p>
                        <p className='text-center py-8 tracking-[5px] leading-[28px] lg:hidden'>ヨーロッパに留学していた<br />オーナー夫婦が
                            <br />
                            そんな風に考えて作った<br />空間です。
                        </p>
                        <h2 className='pt-2'><img src="photo/sepia.jpg" /></h2>
                        <p className='text-center py-8 tracking-[5px] leading-[28px]'>
                            <br />
                            日本の防音マンションや<br />防音スタジオは
                            <br />
                            よく吸音され、<br />どちらかというと
                            <br />
                            デットな空間になりがちです。
                            <br />
                            そのような環境での練習を
                            <br />
                            好まれる方も<br />多いかもしれませんが
                            <br />
                            留学先ではよく響く空間が多く
                            <br />
                            そのようなところから<br />学ぶことも
                            <br />
                            たくさんありました。
                            <br />
                            なかなかない、<br />よく響くスタジオで
                            <br />
                            演奏してみませんか？
                        </p>
                    </div>
                    <h2 className='pt-2'><img src="photo/studio1.jpg" /></h2>
                    <div>
                        <p className='text-center py-8 tracking-[5px] leading-[28px]'>
                            白基調の内装にも<br />こだわっており、<br />写真撮影や<br />動画撮影はもちろん、<br />いつもと違う<br />ヨーロピアンな空間で<br />練習をお楽しみいただけます。
                            <br />
                            完全無人スタジオで、<br />スタッフと<br />顔を合わせることなく<br />ご利用可能です。<br />（防犯カメラあり）
                            <br /><br />
                            ご予約時間のみ有効の<br />暗証番号式ロックを<br />採用しているため、<br />前の方が鍵を置き忘れて<br />入室できない…<br />といったトラブルも<br />ありません。
                        </p>
                        <div className='flex justify-center pt-10'>
                            <p className='text-left tracking-[5px] leading-[28px] ml-4'>
                                ・楽器練習<br />
                                ・レッスン<br />
                                ・セミナー<br />
                                ・録音、動画撮影<br />
                                ・ライブ配信<br />
                                ・プロフィール写真撮影<br />
                                ・コワーキングスペース<br />
                                ・オンラインレッスン<br />
                            </p>
                        </div>
                        <div className='py-8 text-[14px] ml-2'>などなど、様々な用途にてご利用ください。</div>
                        <div className='flex justify-center'>
                            <p className='text-left tracking-[4px] leading-[28px] ml-10'>
                                定員　約10名
                                <br />
                                広さ　25.16㎡（約15畳）
                            </p>
                        </div>
                        <div className='py-10 ml-8'>
                            <p className='text-left tracking-[4px] leading-[28px] -indent-4 text-[11px]'>※完全防音ではありません。外の音はほぼ聞こえませんが、場合によっては大きな音のサイレン等、少し聞こえてしまう場合もございます。<br />そのため、大切なコンクールのための録音などの際は、よく考慮されご納得いただいたうえでご予約いただきますようお願いいたします。
                                <br /><br />
                            </p>
                            <p className='text-left tracking-[4px] leading-[28px] -indent-4 text-[11px]'>
                                ※大変申し訳ありませんが、金管楽器、打楽器は演奏不可とさせていただいております。ご理解のほどお願いいたします。
                            </p>
                        </div>
                        <div className='pt-8 flex justify-center'>
                            <h2 className='w-[60%]'><img src="photo/piano1.png" /></h2>
                        </div>
                        <div className='pb-10'>
                            <p className='text-center py- tracking-[4px] leading-[28px] py-8'>
                                YAMAHA C3B
                            </p>
                            <p className='text-left tracking-[4px] leading-[28px]'>
                                全ハンマー、全弦を新品に交換済（2024年）<br />

                                ピアノ弦はドイツ製の大変質の良いものを使用しています。<br />

                                この弦は世界トップクラスの高級輸入ピアノによく使用されており、柔軟性に富んだ輝きのある響きが特徴です。
                                <br />
                                まろやかに響く音で、練習、レッスンをお楽しみください。
                            </p>
                        </div>
                        <div id="equipment2">
                            <div className='text-center'>スタジオ備品一覧</div>
                            <h2 className='pt-8'><img src="photo/bihin.jpg" /></h2>
                            <p className='text-center  tracking-[4px] leading-[28px] mt-8'>
                                その他
                                <br /><br />
                                カメラスタンド
                                <br />
                                マイクスタンド
                                <br />
                                マイクケーブル
                                <br />
                                譜面台
                                <br />
                                コンセント8口
                            </p>
                            <p className='text-center tracking-[3px] leading-[28px] mt-6 text-[14px]'>
                                高音質マイク（NEUMANN、AKG）
                                <br />
                                高画質カメラ（FUJIFILM X-H2S ）
                            </p>
                            <p className='text-center text-[15px] py-1 '>（録音録画プランの時のみ録音技師が使用）</p>
                            <p className='leading-[28px] pb-8 pt-4'>
                                本棚に置いてある楽譜や本も、<br />大切に扱っていただけるのであれば、<br />　ご自由にご覧ください。
                            </p>
                        </div>
                        <div>
                            <p className='text-center tracking-[4px] leading-[28px] pb-10'>
                                営業時間
                                <br />
                                年中無休
                                <br />
                                9:00〜21:00
                            </p>
                        </div>
                        <div>
                            <h4 className='text-center  tracking-[4px] leading-[28px] mb-8'>スタジオ利用ルール</h4>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・楽器や空間、備品を大切にしてくださる方のみご利用お願いいたします。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・当スタジオは土足禁止です。入ってすぐのマットは土足OKですので必ず靴をお脱ぎください。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・本番用シューズ等でご利用されたい場合、靴の底を拭いた上でご使用いただいてかまいません。<br />ただし、ピンヒールや床が傷つくおそれのあるシューズはお控えください。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・飲食可能です。ただしピアノの側ではなく、入って右側半分のスペースのみでお願いいたします。<br />また飲食された場合、汚れのあるなしにかかわらず利用後に掃除機をかけていただくようお願いいたします。<br />匂いの強い食べ物はNGとします。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・アルコールの持ち込み、酒気帯びの方のご利用は禁止です。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・ペーパータオル以外のゴミはお持ち帰りをお願いしております。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・ピアノの移動は調律の関係で禁止とします。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・ピアノは屋根を開けていただいてかまいませんが、開け方をご存知の場合のみでお願いいたします。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・撮影等の都合でスタジオ内の備品を移動させていただいても構いません（ピアノを除く）。<br />ただし、ご利用終了時に必ず元の位置にお戻しください。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・万が一スタジオ設備や備品を破損、汚損、傷つけられた場合、すみやかにご連絡ください。故意、過失にかかわらず原状回復費は実費でご負担いただきます。ご連絡いただけなかった場合、今後の利用を制限させていただきますのであらかじめご了承ください。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・長時間のご利用の際は、換気を行なってください。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・スタジオ内は禁煙です。火気および危険物の持ち込みは固くお断りいたします。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・スタジオ内で起こった事故、怪我、お客様の持ち込み機材などの破損に関しても当スタジオは一切責任を負いません。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・貴重品の管理は個人の責任でお願いします。万が一紛失、盗難等の事故が生じた場合でも当スタジオは一切責任を負いません。<br />
                            </p>
                            <p className='text-left  tracking-[4px] leading-[28px] pb-4 text-[13px] -indent-4 pl-4'>
                                ・当スタジオの名誉もしくは信用を棄損する行為があった場合は即刻退室して頂きます。<br />
                            </p>
                        </div>
                        <div className='text-[13px] pt-6 pb-4'>その他、詳細は<Link href="/useterms" className="underline font-bold">利用規約</Link>を必ずご確認ください。</div>
                    </div>
                    <div className='pt-2 pb-6 leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
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