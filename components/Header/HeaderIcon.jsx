import Link from "next/link"

export const HeaderIcon = () => {
    return (
        <div className="inline-flex pb-[18px] pr-2">
            <Link href="https://web.star7.jp/mypage/mobile_info.php?p=d09908f508" className="inline-flex relative w-[30px] lg:w-10" target="_blank" rel="noopener noreferrer">
                <img src="/icon/reserve.svg" width="50" height="50" alt="Reserve" />
                <p className="absolute text-[10px] pt-8 text-[#BDA06A] lg:text-[13px] lg:pt-11">ご予約</p>
            </Link>

        </div>
    )
}