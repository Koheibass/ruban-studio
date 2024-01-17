import Link from "next/link"

export const SideMenu = () => {
    return (
        <ul class="slide-menu">
            <li><Link href="#biography" class="slide-menu1">プロフィール</Link></li>
            <li><Link href="#concerts" class="slide-menu2">コンサート</Link></li>
            <li><Link href="#media" class="slide-menu3">メディア</Link></li>
            <li><Link href="#recordings" class="slide-menu4">CD</Link></li>
            <li><Link href="#contact" class="slide-menu5">お問い合わせ</Link></li>
        </ul>
    )
}