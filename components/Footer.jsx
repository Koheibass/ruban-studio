import Link from "next/link"

export const Footer = () => {
    return (
        <div className="pt-1 bg-[#f4e7d8] text-center">
            <div className='mx-6 pt-4 pb-'>
                <div className='text-center tracking-[4px] leading-[17px] text-[12px]'>
                    <p className='text-[14px] pb-3'>ピアノスタジオ リュバン</p>
                    <p className="pb-2">東京都練馬区北町6-37-3　1F</p>
                    <p>営業時間　9:00～21:00</p>
                </div>
            </div>
            <div className="text-sm text-center bg-transparent mt-4 pb-4 text-[#a5862f] underline">
                <Link href='https://maps.app.goo.gl/zpmZPzvNjdmfFEZK9' target='_blank'>Google Mapで見る</Link>
            </div>
            <div className="text-[10px] text-[#a5862f]"> <Link href="/terms">特定商取引法に基づく表記</Link></div>
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