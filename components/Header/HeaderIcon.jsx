import Link from "next/link"

export const HeaderIcon = () => {
    return (
        <div className="inline-flex">
            <Link href="https://www.instagram.com/akaboshi_rina/" className="inline-flex lg:pt-0.5 mr-2 lg:mr-2.5 w-[22px]" target="_blank" rel="noopener noreferrer">
                <img src="/icon/Instagram.svg" width="35" height="35" alt="instagram" />
            </Link>
            <Link href="https://www.youtube.com/@akaboshirina" className="inline-flex relative lg:pt-[2px] pl-[4px] lg:mr-[10px] w-8" target="_blank" rel="noopener noreferrer">
                <img src="/icon/YouTube.svg" width="50" height="50" alt="YouTube" />
            </Link>
        </div>
    )
}