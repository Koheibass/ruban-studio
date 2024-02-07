import Link from "next/link"

export const ConcertsPast = () => {
    return (
        <div>
            <div>
                <span className="font-bold text-[#937a43]">2021.06.19</span>
                <span className="text-sm text-[#937a43]">　YouTube / イマチケ</span>
            </div>
            <Link href="/concert/20210619" className="underline text-[#ff9a9a]">赤星 里奈 ピアノリサイタル vol.1 presented by
                {"MUSICUM"}</Link>
        </div>
    )
}