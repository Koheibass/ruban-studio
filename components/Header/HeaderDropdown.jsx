import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from '@/utils/language'

export const HeaderDropdown = () => {
    const { lang } = useLanguage()

    useEffect(() => {
        const parentMenuItem = document.querySelectorAll('#dropdown');
        console.log(parentMenuItem);

        for (let i = 0; i < parentMenuItem.length; i++) {
            parentMenuItem[i].addEventListener('mouseover', dropDownMenuOpen);
            parentMenuItem[i].addEventListener('mouseleave', dropDownMenuClose);
        }

        return () => {
            for (let i = 0; i < parentMenuItem.length; i++) {
                parentMenuItem[i].removeEventListener('mouseover', dropDownMenuOpen);
                parentMenuItem[i].removeEventListener('mouseleave', dropDownMenuClose);
            }
        };
    }, []);

    function dropDownMenuOpen(e) {
        const childMenuLink = e.currentTarget.querySelectorAll('.drop-menu__link');
        console.log(childMenuLink);

        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.add('is-active');
        }
    }

    function dropDownMenuClose(e) {
        const childMenuLink = e.currentTarget.querySelectorAll('.drop-menu__link');
        console.log(childMenuLink);

        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.remove('is-active');
        }
    }

    return (
        < ul className="flex pl-0" >
            {
                lang === 'ja' &&
                <li className="p-0 m-0" id="dropdown">
                    <Link href="/" className="dropdown__menu__link">Japanese</Link>
                    <ul className="dropdown__menu">
                        <li className="dropdown__menu__item">
                            <Link href="/" className="drop-menu__link">Japanese</Link>
                        </li>
                        <li className="dropdown__menu__item">
                            <Link href="/indexen" className="drop-menu__link">English</Link>
                        </li>
                    </ul>
                </li>
            }
            {
                lang === 'en' &&
                <li className="p-0 m-0" id="dropdown">
                    <Link href="/indexen" className="dropdown__menu__link__en">English</Link>
                    <ul className="dropdown__menu">
                        <li className="dropdown__menu__item">
                            <Link href="/" className="drop-menu__link">Japanese</Link>
                        </li>
                        <li className="dropdown__menu__item">
                            <Link href="/indexen" className="drop-menu__link">English</Link>
                        </li>
                    </ul>
                </li>
            }
        </ ul>
    );
};
