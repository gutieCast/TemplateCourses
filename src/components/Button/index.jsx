import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import 'components/Button/button.scss'

const Button = ({ text, onClick, type, link, classStyle, btn, disabled }) => {
    return (
        <>
            {
                !btn &&
                <Link className={`uk-animation-toggle link-button ${classStyle}`} smooth to={link}>
                    {text}
                </Link>

            }
            {
                btn &&
                <button className={`uk-button uk-button-default btn ${classStyle}`} disabled={disabled} type={type} onClick={onClick}>
                    {text}
                </button>
            }
        </>
    )
}

export { Button }