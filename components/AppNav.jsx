import Link from 'next/link'
import { HeaderLeft } from './Header/HeaerLeft'
import { HeaderMenu } from './Header/HeaderMenu'
import { HeaderIcon } from './Header/HeaderIcon'
import { HeaderDropdown } from './Header/HeaderDropdown'
import { HeaderHumburger } from './Header/HeaderHumburger'
import { SideMenu } from './Header/SideMenu'

export const AppNav = () => {
    return (
        <nav class="header">
            <div>
                <div class="header__whole">
                    <HeaderLeft />
                    <div className="flex items-center justify-end">
                        <HeaderMenu />
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