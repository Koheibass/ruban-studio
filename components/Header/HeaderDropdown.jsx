import Link from "next/link"

export const HeaderDropdown = () => {
    return (
        <ul className="dropdown">
            <li className="dropdown__content">
                <Link href="/" className="dropdown__menu__link">Japanese</Link>
                <ul className="dropdown__menu">
                    <li className="dropdown__menu__item"><Link href="index.html"
                        className="drop-menu__link">Japanese</Link></li>
                    <li className="dropdown__menu__item"><Link href="/english/indexen.html"
                        className="drop-menu__link">English</Link></li>
                </ul>
            </li>
        </ul>

    )
}