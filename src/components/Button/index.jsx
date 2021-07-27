import React from 'react'
import { Link } from 'react-router-dom'
import 'components/Button/button.scss'

const Button = ({ text, func, type, link, classStyle, anim, disabled }) => {
    return (
        <Link className={'uk-animation-toggle link-button'} type={type} disabled={disabled} onClick={func} to={link}>
            <div className={`uk-button uk-button-default ${anim} button ${classStyle}`}>
                {text}
            </div>
        </Link>
    )
}

export { Button }