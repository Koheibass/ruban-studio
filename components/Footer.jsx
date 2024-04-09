import Link from "next/link"

export const Footer = () => {
    return (
        <div className="pt-4 h-40 bg-[#ffeeee]">
            <div className="flex justify-center">
                <Link href="https://www.instagram.com/akaboshi_rina/">
                    <img src="/icon/Instagram.svg" className="inline-block pt-[6px]" width="40" height="50" alt="twitter" />
                </Link>
                <Link href="https://www.youtube.com/@akaboshirina">
                    <img src="/icon/YouTube.svg" className="inline-block relative pt-1 pl-[15px]" width="60" height="60" alt="YouTube" />
                </Link>
            </div>
            <div className="text-sm text-center bg-transparent mt-6">© 2024 Rina Akaboshi</div>
        </div>
    )
}