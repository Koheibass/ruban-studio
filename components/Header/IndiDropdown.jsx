import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from '@/utils/language'

export const IndiDropdown = ({ hrefja, hrefen }) => {
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
        const childMenuLink = e.currentTarget.querySelectorAll('#drop-menu-link');
        console.log(childMenuLink);

        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.add('is-active');
        }
    }

    function dropDownMenuClose(e) {
        const childMenuLink = e.currentTarget.querySelectorAll('#drop-menu-link');
        console.log(childMenuLink);

        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.remove('is-active');
        }
    }

    return (
        < ul className="flex pl-0">
            {
                lang === 'ja' &&
                <li className="p-0 m-0" id="dropdown">
                    <ul className="block w-full py-[2px] px-[7px] mt-[2px] mx-[1px] mb-0 text-[8px] font-thin pb-1 bg-[#FFF] border-solid border border-[#a07c43] rounded-[10px] text-[#a07c43] no-underline text-center lg:text-[12px] lg:py-[2.5px] lg:px-3 hover:bg-[#ebebeb] hover:text-[#fefaff]">Japanese</ul>
                    <ul className="lg:top-[38px] top-12 absolute m-0 p-0 bg-white rounded-[10px]">
                        <li className="list-none p-0 m-0">
                            <Link href={hrefja} className="drop-menu__link" id="drop-menu-link">Japanese</Link>
                        </li>
                        <li className="list-none p-0 m-0">
                            <Link href={hrefen} className="drop-menu__link" id="drop-menu-link">English</Link>
                        </li>
                    </ul>
                </li >
            }
            {
                lang === 'en' &&
                <li className="p-0 m-0" id="dropdown">
                    <ul className="block w-full py-[2px] px-[10px] mt-[2px] mx-[1px] mb-0 text-[8px] font-thin pb-1 bg-[#FFF] border-solid border border-[#a07c43] rounded-[10px] text-[#a07c43] no-underline text-center lg:text-[12px] lg:py-[2px] lg:px-3 hover:bg-[#ebebeb] hover:text-[#fefaff]">English</ul>
                    <ul className="lg:top-[38px] top-12 absolute m-0 p-0 bg-white rounded-[10px]">
                        <li className="list-none p-0 m-0">
                            <Link href={hrefja} className="drop-menu__link" id="drop-menu-link">Japanese</Link>
                        </li>
                        <li className="list-none p-0 m-0">
                            <Link href={hrefen} className="drop-menu__link" id="drop-menu-link">English</Link>
                        </li>
                    </ul>
                </li>
            }
        </ ul >
    );
};
