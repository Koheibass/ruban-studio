import { Info } from '@/components/News/Info'
import { useLanguage } from '@/utils/language';
import Link from 'next/link';

export const Topix = () => {
    const { lang } = useLanguage();
    return (
        <div>
            <h3 className="mb-4 text-center text-[20px] lg:tracking-widest lg:text-[18px] leading-none font-bold pt-2 pb-1 text-[#937a43] font-noto mt-4">
                <div>最新情報</div>
            </h3>
            <div className="grid mb-4 lg:mt-4 px-4 py-4 bg-[#f9f4ff] border rounded">
                <div className="font-bold text-xl text-[#937a43] ml-4">
                    {"2024.06.18"}
                    <small> (Mon)</small>
                </div>
                <Link href="https://oto-inochi.com/"
                    className="block underline lg:mt-1 text-[#ff9a9a] text-xl" target="_blank" rel="noopener noreferrer">ピアノスタジオOPEN♪</Link>
                <br />
                <div className="font-bold text-xl text-[#937a43] ml-4">
                    {"2023.08.01"}
                    <small> (Tue)</small>
                </div>
                <Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className="block underline lg:mt-1 text-[#ff9a9a] text-xl">調律しました♪</Link>
            </div>

        </div >
    )
} 