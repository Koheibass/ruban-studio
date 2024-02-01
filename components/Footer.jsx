import Link from "next/link"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <Link href="https://www.instagram.com/Linkkaboshi_rina/">
                    <img src="/icon/Instagram.svg" className="footer__instagram" width="40" height="50" alt="twitter" />
                </Link>
                <Link href="https://www.youtube.com/@akaboshirina">
                    <img src="/icon/YouTube.svg" className="footer__youtube" width="60" height="60" alt="YouTube" />
                </Link>
            </div>
            <div className="lisence">© 2024 Rina Akaboshi</div>
        </div>
    )
}