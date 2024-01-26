import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HeaderMenu() {
    const router = useRouter()
    const isTopPage = router.pathname === '/'

    if (isTopPage) return <div className="header__menu">
        <Link href="#biography" className="menu__biography">プロフィール</Link>
        <Link href="#concerts" className="menu__concerts">コンサート</Link>
        <Link href="#media" className="menu__media">メディア</Link>
        <Link href="#recordings" className="menu__recordings">CD</Link>
        <Link href="#contact" className="menu__contact">お問い合わせ</Link>
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
