import { HeaderLeft } from '../Header/HeaerLeft'
import HeaderMenuEn from './HeaderEn/HeaderMenuEn'
import { HeaderIcon } from '../Header/HeaderIcon'
import { HeaderDropdownEn } from './HeaderEn/HeaderDropdownEn'
import { HeaderHumburger } from '../Header/HeaderHumburger'
import { SideMenu } from '../Header/SideMenu'

export const AppNavEn = () => {
    return (
        <nav className="header">
            <div>
                <div className="header__whole">
                    <HeaderLeft />
                    <div className="flex items-center justify-end">
                        <HeaderMenuEn />
                        <HeaderIcon />
                        <HeaderDropdownEn />
                        <HeaderHumburger />
                    </div>
                    <SideMenu />
                </div>
            </div>
        </nav>
    )
}