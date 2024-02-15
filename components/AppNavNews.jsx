import { HeaderLeft } from './Header/HeaerLeft'
import { HeaderIcon } from './Header/HeaderIcon'
import { useLanguage } from '@/utils/language'
import HeaderMenuEn from './English/HeaderEn/HeaderMenuEn'
import HeaderMenu from './Header/HeaderMenu'
import { useEffect } from 'react'
import { IndiDropdown } from './Header/IndiDropdown'
import { HeaderDropdown } from './Header/HeaderDropdown'

export const AppNavNews = () => {
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
        <nav className="top-0 z-10 w-full sticky bg-[#ffeeee]">
            <div>
                <div className="flex items-center h-12">
                    <HeaderLeft />
                    <div className="flex items-center justify-end">
                        {
                            lang === 'ja' &&
                            <HeaderMenu />
                        }
                        {
                            lang === 'en' &&
                            <HeaderMenuEn />
                        }
                        <HeaderIcon />
                        <div className="hamburger invisible">
                            <span>
                                <img src="/photo/piano.svg" width="25" height="25" alt="piano" />
                            </span>
                            <p className="piano-menu">menu</p>
                        </div>
                    </div>
                    <ul className="slide-menu">
                        <li>{lang === 'ja' && <a href="#biography" className="slide-menu1">プロフィール</a>}{lang === 'en' && <a href="#biography" className="slide-menu1">Biography</a>}</li>
                        <li>{lang === 'ja' && <a href="#concerts" className="slide-menu2">コンサート</a>}{lang === 'en' && <a href="#concerts" className="slide-menu2">Concerts</a>}</li>
                        <li>{lang === 'ja' && <a href="#media" className="slide-menu3">メディア</a>}{lang === 'en' && <a href="#media" className="slide-menu3">Media</a>}</li>
                        <li>{lang === 'ja' && <a href="#recordings" className="slide-menu4">CD</a>}{lang === 'en' && <a href="#recordings" className="slide-menu4">CD</a>}</li>
                        <li>{lang === 'ja' && <a href="#contact" className="slide-menu5">お問い合わせ</a>}{lang === 'en' && <a href="#contact" className="slide-menu5">Contact</a>}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};