import Link from 'next/link'

export const HeaderMenu = () => {
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