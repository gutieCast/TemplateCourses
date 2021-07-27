import React from 'react'
import { BurguerButton, MainMenu } from './components/'
import 'components/Header/components/Menu/menu.scss'

const Menu = () => {
    return (
        <nav id="main-navegator">
            {
                window.innerWidth > 999
                    ? < MainMenu styleName={"uk-animation-slide-top-small"} />
                    :
                    <BurguerButton>
                        <MainMenu styleName={"uk-animation-slide-top-small"} />
                    </BurguerButton>
            }
        </nav>
    )
}

export { Menu }
