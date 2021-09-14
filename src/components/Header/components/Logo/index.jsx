import React from 'react'
import { logo } from '../../../../helpers/images'
import './logo.scss'

const Logo = () => {
    return (
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex logo-container-header">
            <a href={`${process.env.PUBLIC_URL}/`}>
                <img id="logoCourse" src={logo.img} alt={logo.alt} />
            </a>
        </div>
    )
}

export { Logo }