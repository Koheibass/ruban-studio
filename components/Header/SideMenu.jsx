import Link from "next/link"

export const SideMenu = () => {
    return (
        <ul className="slide-menu">
            <li><Link href="#biography" className="slide-menu1">プロフィール</Link></li>
            <li><Link href="#concerts" className="slide-menu2">コンサート</Link></li>
            <li><Link href="#media" className="slide-menu3">メディア</Link></li>
            <li><Link href="#recordings" className="slide-menu4">CD</Link></li>
            <li><Link href="#contact" className="slide-menu5">お問い合わせ</Link></li>
        </ul>
    )
}