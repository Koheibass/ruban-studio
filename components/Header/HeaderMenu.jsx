import Link from 'next/link'

export const HeaderMenu = () => {
    return (
        <div class="header__menu">
            <Link href="#biography" class="menu__biography">プロフィール</Link>
            <Link href="#concerts" class="menu__concerts">コンサート</Link>
            <Link href="#media" class="menu__media">メディア</Link>
            <Link href="#recordings" class="menu__recordings">CD</Link>
            <Link href="#contact" class="menu__contact">お問い合わせ</Link>
        </div>
    )
}