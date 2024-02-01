import Link from "next/link";
import { useEffect } from "react";

export const HeaderDropdownEn = () => {

    useEffect(() => {
        const parentMenuItem = document.querySelectorAll('.dropdown__content');
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
        <ul className="dropdown">
            <li className="dropdown__content">
                <Link href="/indexen" className="dropdown__menu__link">English</Link>
                <ul className="dropdown__menu">
                    <li className="dropdown__menu__item">
                        <Link href="/" className="drop-menu__link">Japanese</Link>
                    </li>
                    <li className="dropdown__menu__item">
                        <Link href="/indexen" className="drop-menu__link">English</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};
