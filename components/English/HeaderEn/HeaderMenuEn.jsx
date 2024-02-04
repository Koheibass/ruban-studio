import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HeaderMenuEn() {
    const router = useRouter()
    const isTopPage = router.pathname === '/indexen'

    if (isTopPage) return <div className="text-center items-center w-full text-[18px] font-bold font-noto text-[#937a43] tracking-[0.05rem]">
        <Link href="#biography" className="pr-2.5">Biography</Link>
        <Link href="#concerts" className="pr-2.5">Concerts</Link>
        <Link href="#media" className="pr-2.5">Media</Link>
        <Link href="#recordings" className="pr-2.5">CD</Link>
        <Link href="#contact" className="">Contact</Link>
    </div>

    return (
        null
    )
}

/**
 * export const HeaderMenu = () => {
    return (
        <div className="header__menu">
            <Link href="#biography" className="menu__biography">プロフィール</Link>
            <Link href="#concerts" className="menu__concerts">コンサート</Link>
            <Link href="#media" className="menu__media">メディア</Link>
            <Link href="#recordings" className="menu__recordings">CD</Link>
            <Link href="#contact" className="menu__contact">お問い合わせ</Link>
        </div>
    )
}
 */
