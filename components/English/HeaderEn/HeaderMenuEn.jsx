import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HeaderMenuEn() {
    const router = useRouter()
    const isTopPage = router.pathname === '/indexen'

    if (isTopPage) return <div className="header__menu">
        <Link href="#biography" className="menu__biography">Biography</Link>
        <Link href="#concerts" className="menu__concerts">Concerts</Link>
        <Link href="#media" className="menu__media">Media</Link>
        <Link href="#recordings" className="menu__recordings">CD</Link>
        <Link href="#contact" className="menu__contact">Contact</Link>
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
