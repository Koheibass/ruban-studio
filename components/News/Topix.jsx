import { useLanguage } from '@/utils/language'
import Link from 'next/link'

export const Topix = () => {
  const { lang } = useLanguage()
  return (
    <div className="pt-2 pb-8">
      <h3 className="mb-4 text-center text-[20px] lg:tracking-widest lg:text-[18px] leading-none font-bold pt-2 pb-1 text-[#937a43] font-noto mt-4">
        <div>NEWS</div>
      </h3>
      <div className="grid mb-4 lg:mt-4 px-4 py-4 bg-[#f9f4ff] border rounded">
        <div className="font-bold text-xl text-[#937a43] ml-4 pb-2">
          {'2024.10.29'}
          <small> (Tue)</small>
        </div>
        <Link
          href="/"
          className="block underline lg:mt-1 text-[#ff9a9a] text-xl"
        >
          調律しました♪
        </Link>

        <div className="font-bold text-xl text-[#937a43] ml-4 hidden">
          {'2023.08.01'}
          <small> (Tue)</small>
        </div>
        <Link
          href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508"
          className="underline lg:mt-1 text-[#ff9a9a] text-xl hidden"
        >
          調律しました♪
        </Link>
      </div>
      <div className="grid mb-4 lg:mt-4 px-4 py-4 bg-[#f9f4ff] border rounded">
        <div className="font-bold text-xl text-[#937a43] ml-4 pb-2">
          {'2024.06.22'}
          <small> (Sat)</small>
        </div>
        <Link
          href="/"
          className="block underline lg:mt-1 text-[#ff9a9a] text-xl"
        >
          ピアノスタジオOPEN♪
        </Link>

        <div className="font-bold text-xl text-[#937a43] ml-4 hidden">
          {'2023.08.01'}
          <small> (Tue)</small>
        </div>
        <Link
          href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508"
          className="underline lg:mt-1 text-[#ff9a9a] text-xl hidden"
        >
          調律しました♪
        </Link>
      </div>
    </div>
  )
}
