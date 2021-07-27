import React from 'react'
import LogoWeb from 'assets/images/logo_web.png'
import 'components/Header/components/Logo/logo.scss'

const Logo = () => {
    return (
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex logo-container">
            <a href="/">
                <img id="logoCourse" src={LogoWeb} alt="RESCAT logo" />
            </a>
        </div>
    )
}

export { Logo }