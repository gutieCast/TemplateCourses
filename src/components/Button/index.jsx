import React from 'react'
import { Link } from 'react-router-dom'
import 'components/Button/button.scss'

const Button = ({ text, onClick, type, link, classStyle, anim, disabled }) => {
    return (
        <>
            {
                link &&
                <Link className={`uk-animation-toggle link-button ${classStyle}`} to={link}>
                    {text}
                </Link>

            }
            {
                !link &&
                <button className={`uk-button uk-button-default ${anim} btn ${classStyle}`} disabled={disabled} type={type} onClick={onClick}>
                    {text}
                </button>
            }
        </>
    )
}

export { Button }