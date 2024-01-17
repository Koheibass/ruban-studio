import Link from "next/link"

export const HeaderIcon = () => {
    return (
        <div class="header__icon">
            <Link href="https://www.instagram.com/akaboshi_rina/" class="instagram">
                <img src="/icon/Instagram.svg" width="35" height="35" alt="instagram" />
            </Link>
            <Link href="https://www.youtube.com/@akaboshirina" class="youtube">
                <img src="/icon/YouTube.svg" width="50" height="50" alt="YouTube" />
            </Link>
        </div>
    )
}