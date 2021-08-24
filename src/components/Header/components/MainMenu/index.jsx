import React from 'react'
import { BurguerButton } from 'components/Header/components/MainMenu/components/BurguerButton'
import Menu from 'components/Menu'
import 'components/Header/components/MainMenu/mainMenu.scss'

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
