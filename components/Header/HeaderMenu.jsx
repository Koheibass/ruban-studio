import Link from 'next/link'
import { useRouter } from 'next/router'


export default function HeaderMenu() {
    const router = useRouter()
    const isTopPage = router.pathname === '/'


    if (isTopPage) return <div className="hidden lg:block text-center items-center lg:w-full lg:text-[18px] font-bold font-noto text-[#937a43] lg:tracking-[0.05rem]">
        <Link href="#biography" className="lg:pr-2.5">プロフィール</Link>
        <Link href="#concerts" className="lg:pr-2.5">コンサート</Link>
        <Link href="#media" className="lg:pr-2.5">メディア</Link>
        <Link href="#recordings" className="lg:pr-2.5">CD</Link>
        <Link href="#contact" className="">お問い合わせ</Link>
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
