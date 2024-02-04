import { useLanguage } from '@/utils/language'
import Link from 'next/link'

export const HeaderLeft = () => {
    const { lang } = useLanguage()

    return (

        <div className="flex-1 text-2xl pl-[5px] font-black text-nowrap">
            {
                lang === 'ja' &&
                <Link className="font-castoro text-[#937a43] no-underline pl-[5px]" href="/">Rina Akaboshi</Link>
            }
            {
                lang === 'en' &&
                <Link className="font-castoro text-[#937a43] no-underline pl-[5px]" href="/indexen">Rina Akaboshi</Link>
            }
        </div>
    )
}