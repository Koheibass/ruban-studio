import { useLanguage } from '@/utils/language'
import Link from 'next/link'

export const HeaderLeft = () => {
    const { lang } = useLanguage()

    return (

        <div className="header__left">
            {
                lang === 'ja' &&
                <Link className="header__title" href="/">Rina Akaboshi</Link>
            }
            {
                lang === 'en' &&
                <Link className="header__title" href="/indexen">Rina Akaboshi</Link>
            }
        </div>
    )
}