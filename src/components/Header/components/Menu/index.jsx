import React from 'react'
import { BurguerButton } from 'components/Header/components/Menu/components/BurguerButton'
import { MainMenu } from 'components/Header/components/Menu/components/MainMenu'
import 'components/Header/components/Menu/menu.scss'

const Menu = () => {
    return (
        <nav id="main-navegator">
            {
                window.innerWidth > 999
                    ? < MainMenu styleAnimation={"uk-animation-slide-top-small"} styleName={'menu-header'} />
                    :
                    <BurguerButton>
                        <MainMenu styleAnimation={"uk-animation-slide-top-small"} styleName={'menu-header'}/>
                    </BurguerButton>
            }
        </nav>
    )
}

export { Menu }
