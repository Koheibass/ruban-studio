import Link from "next/link"

export const HeaderDropdown = () => {
    return (
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

    )
}