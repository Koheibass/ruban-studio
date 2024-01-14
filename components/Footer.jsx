import Link from "next/link"

export const Footer = () => {
    return (
        <div class="footer">
            <div class="footer__content">
                <Link href="https://www.instagram.com/Linkkaboshi_rina/">
                    <img src="/icon/Instagram.svg" class="footer__instagram" width="40" height="50" alt="twitter" />
                </Link>
                <Link href="https://www.youtube.com/@akaboshirina">
                    <img src="/icon/YouTube.svg" class="footer__youtube" width="60" height="60" alt="YouTube" />
                </Link>
            </div>
            <div class="lisence">© 2023 Rina Akaboshi</div>
        </div>
    )
}