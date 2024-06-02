import { HeaderLeft } from './Header/HeaerLeft'
import { HeaderIcon } from './Header/HeaderIcon'
import { HeaderDropdown } from './Header/HeaderDropdown'
import { useLanguage } from '@/utils/language'
import HeaderMenuEn from './English/HeaderEn/HeaderMenuEn'
import HeaderMenu from './Header/HeaderMenu'
import { useEffect } from 'react'
import Link from 'next/link'

export const AppNav = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const slideMenu1 = document.querySelector('.slide-menu1');
        const slideMenu2 = document.querySelector('.slide-menu2');
        const slideMenu3 = document.querySelector('.slide-menu3');
        const slideMenu4 = document.querySelector('.slide-menu4');
        const slideMenu5 = document.querySelector('.slide-menu5');

        const handleHamburgerClick = () => {
            hamburger.classList.toggle('active');
            document.querySelector('.slide-menu').classList.toggle('active');
        };

        const handleSlideMenuClick = () => {
            slideMenu1.classList.toggle('non-active');
            document.querySelector('.slide-menu').classList.toggle('active');
            hamburger.classList.toggle('active');
        };

        hamburger.addEventListener('click', handleHamburgerClick);
        slideMenu1.addEventListener('click', handleSlideMenuClick);
        slideMenu2.addEventListener('click', handleSlideMenuClick);
        slideMenu3.addEventListener('click', handleSlideMenuClick);
        slideMenu4.addEventListener('click', handleSlideMenuClick);
        slideMenu5.addEventListener('click', handleSlideMenuClick);


        return () => {
            hamburger.removeEventListener('click', handleHamburgerClick);
            slideMenu1.removeEventListener('click', handleSlideMenuClick);
            slideMenu2.removeEventListener('click', handleSlideMenuClick);
            slideMenu3.removeEventListener('click', handleSlideMenuClick);
            slideMenu4.removeEventListener('click', handleSlideMenuClick);
            slideMenu5.removeEventListener('click', handleSlideMenuClick);
        };
    }, []);


    return (
        <nav className="top-0 z-10 w-full sticky bg-[#ffffff]">
            <div>
                <div className="flex items-center h-20">
                    <HeaderLeft />
                    <HeaderIcon />
                    <div className="flex items-center">
                        <div className="hamburger lg:invisible">
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className="piano-menu">MENU</p>
                        </div>
                    </div>
                    <ul className="slide-menu">
                        <li>{lang === 'ja' && <Link href="/studio" className="slide-menu1">スタジオ案内</Link>}{lang === 'en' && <a href="#biography" className="slide-menu1">Biography</a>}</li>
                        <li>{lang === 'ja' && <Link href="/price" className="slide-menu2">ご利用料金</Link>}{lang === 'en' && <a href="#concerts" className="slide-menu2">Concerts</a>}</li>
                        <li>{lang === 'ja' && <Link href="/access" className="slide-menu3">アクセス</Link>}{lang === 'en' && <a href="#media" className="slide-menu3">Media</a>}</li>
                        <li>{lang === 'ja' && <a href="#recordings" className="slide-menu4">初めての方へ</a>}{lang === 'en' && <a href="#recordings" className="slide-menu4">CD</a>}</li>
                        <li>{lang === 'ja' && <a href="#contact" className="slide-menu5">NEWS</a>}{lang === 'en' && <a href="#contact" className="slide-menu5">Contact</a>}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};