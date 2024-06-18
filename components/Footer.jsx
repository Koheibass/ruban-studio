import Link from "next/link"

export const Footer = () => {
    return (
        <div className="pt-1 bg-[#f4e7d8]">
            <div className="text-sm text-center bg-transparent mt-4 pb-4 text-[#a5862f] underline">
                <Link href='https://maps.app.goo.gl/zpmZPzvNjdmfFEZK9' target='_blank'>Google Mapで見る</Link>
            </div>
            <div className="text-sm text-center bg-transparent mt-4 pb-4 text-[#a5862f]">© 2024 Piano Studio Ruban</div>
        </div>
    )
}
/**
 * <div className="flex justify-center">
                <Link href="https://www.instagram.com/akaboshi_rina/">
                    <img src="/icon/Instagram.svg" className="inline-block pt-[6px]" width="40" height="50" alt="twitter" />
                </Link>
                <Link href="https://www.youtube.com/@akaboshirina">
                    <img src="/icon/YouTube.svg" className="inline-block relative pt-1 pl-[15px]" width="60" height="60" alt="YouTube" />
                </Link>
            </div>
 */