import { HeaderLeft } from './Header/HeaerLeft'
import { HeaderIcon } from './Header/HeaderIcon'
import { useLanguage } from '@/utils/language'
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
                <div className="flex items-center h-20 lg:h-[100px]">
                    <HeaderLeft />
                    <div className='pr-10 hidden lg:block lg:text-[25px] lg:text-[#BDA06A]'>
                        <Link href="/studio/#studio" className="sm:pr-5">スタジオ案内</Link>
                        <Link href="/price/#price" className="sm:pr-5">ご利用料金</Link>
                        <Link href="/access/#access" className="sm:pr-5">アクセス</Link>
                        <Link href="/use/#use" className="sm:pr-5">ご利用の流れ</Link>
                        <Link href="/news/#news" className="sm:pr-5">NEWS</Link>
                    </div>
                    <HeaderIcon />
                    <div className="flex items-center pr-1">
                        <div className="hamburger lg:invisible">
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className="piano-menu">MENU</p>
                        </div>
                    </div>
                    <ul className="slide-menu">
                        <li><Link href="/studio/#studio" className="slide-menu1">スタジオ案内</Link></li>
                        <li><Link href="/price/#price" className="slide-menu2">ご利用料金</Link></li>
                        <li><Link href="/access/#access" className="slide-menu3">アクセス</Link></li>
                        <li><Link href="/use/#use" className="slide-menu4">ご利用の流れ</Link></li>
                        <li><Link href="/news" className="slide-menu5">NEWS</Link></li>
                        <li><Link href="/contact" target='_blank' className="slide-menu5">お問い合わせ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};