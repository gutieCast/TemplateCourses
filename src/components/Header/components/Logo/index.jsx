import React from 'react'
import { logo } from 'helpers/images'
import 'components/Header/components/Logo/logo.scss'

const Logo = () => {
    return (
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex logo-container">
            <a href="/">
                <img id="logoCourse" src={logo.img} alt={logo.alt} />
            </a>
        </div>
    )
}

export { Logo }