import Link from 'next/link'
import { useRouter } from 'next/router'


export default function HeaderMenu() {
    const router = useRouter()
    const isTopPage = router.pathname === '/'


    if (isTopPage) return <div className='flex items-center justify-end'><div className="hidden lg:block text-center items-center lg:w-full lg:text-[18px] font-bold font-noto text-[#937a43] lg:tracking-[0.05rem] invisible ">
        <Link href="#biography" className="lg:pr-2.5">スタジオ案内</Link>
        <Link href="#concerts" className="lg:pr-2.5">ご利用料金</Link>
        <Link href="#media" className="lg:pr-2.5">アクセス</Link>
        <Link href="#recordings" className="lg:pr-2.5">初めての方へ</Link>
        <Link href="#contact" className="lg:pr-2.5">NEWS</Link>
    </div></div>

    return (
        null
    )
}
