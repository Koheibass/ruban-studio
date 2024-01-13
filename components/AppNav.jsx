import Link from 'next/link'

export const AppNav = () => {
    return (
        <nav class="header">
            <div>
                <div class="header__whole">
                    <div class="header__left">
                        <Link class="header__title" href="/">Rina Akaboshi</Link>
                    </div>
                    <div class="header__right">
                        <div class="header__menu">
                            <Link href="#biography" class="menu__biography">プロフィール</Link>
                            <Link href="#concerts" class="menu__concerts">コンサート</Link>
                            <Link href="#media" class="menu__media">メディア</Link>
                            <Link href="#recordings" class="menu__recordings">CD</Link>
                            <Link href="#contact" class="menu__contact">お問い合わせ</Link>
                        </div>
                        <div class="header__icon">
                            <Link href="https://www.instagram.com/Linkkaboshi_rina/" className='p-0.5'>
                                <img src="/icon/Instagram.svg" width="50" height="30" alt="instagram" />
                            </Link>
                            <Link href="https://www.youtube.com/@akaboshirina" className='py-1, pl-3'>
                                <img src="/icon/YouTube.svg" width="60" height="30" alt="YouTube" />
                            </Link>
                        </div>
                        <ul class="dropdown">
                            <li class="dropdown__content">
                                <Link href="/" class="dropdown__menu__link">Japanese</Link>
                                <ul class="dropdown__menu">
                                    <li class="dropdown__menu__item"><Link href="index.html"
                                        class="drop-menu__link">Japanese</Link></li>
                                    <li class="dropdown__menu__item"><Link href="/english/indexen.html"
                                        class="drop-menu__link">English</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="hamburger">
                            <span>
                                <img src="/photo/piano.svg" width="25" height="25" alt="piano" />
                            </span>
                            <p class="piano-menu">menu</p>
                        </div>
                    </div>
                    <ul class="slide-menu">
                        <li><Link href="#biography" class="slide-menu1">プロフィール</Link></li>
                        <li><Link href="#concerts" class="slide-menu2">コンサート</Link></li>
                        <li><Link href="#media" class="slide-menu3">メディア</Link></li>
                        <li><Link href="#recordings" class="slide-menu4">CD</Link></li>
                        <li><Link href="#contact" class="slide-menu5">お問い合わせ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}