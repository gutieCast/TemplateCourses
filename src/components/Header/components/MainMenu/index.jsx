import React from 'react'
import { BurguerButton } from './components/BurguerButton'
import Menu from '../../../Menu'
import './mainMenu.scss'

const MainMenu = () => {
    return (
        <nav id="main-navegator">
            {
                window.innerWidth > 999
                    ? < Menu styleAnimation={"uk-animation-slide-top-small"} styleName={'menu-header'} />
                    :
                    <BurguerButton>
                        <Menu styleAnimation={"uk-animation-slide-left-small"} styleName={'menu-header'} />
                    </BurguerButton>
            }
        </nav>
    )
}

export { MainMenu }
