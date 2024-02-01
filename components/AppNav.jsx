import { HeaderLeft } from './Header/HeaerLeft'
import { HeaderIcon } from './Header/HeaderIcon'
import { HeaderDropdown } from './Header/HeaderDropdown'
import { HeaderHumburger } from './Header/HeaderHumburger'
import { SideMenu } from './Header/SideMenu'
import { useLanguage } from '@/utils/language'
import HeaderMenuEn from './English/HeaderEn/HeaderMenuEn'
import HeaderMenu from './Header/HeaderMenu'

export const AppNav = () => {
    const { lang } = useLanguage()

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
                        <HeaderDropdown />
                        <HeaderHumburger />
                    </div>
                    <SideMenu />
                </div>
            </div>
        </nav>
    )
}