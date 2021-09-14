import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { inscriptionButton } from '../../../../helpers/images'
import { wordBalloon } from '../../../../helpers/images'
import './buttonFixed.scss'

const ButtonFixed = ({ bottom, right }) => {

    const buttonFixedRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => {
        setHovered(true)
    }

    const onMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div className="button-fixed">
            {
                // showBalloon &&
                <span className="uk-animation-shake word-balloon" style={{ backgroundImage: `url(${wordBalloon})`, display: `${hovered ? 'block' : 'none'}` }}>
                    ¡Inscríbite aquí!
                </span>
            }
            <Link className="button-icon" ref={buttonFixedRef} style={{ bottom: '100px', right: '100px' }} to={`${process.env.PUBLIC_URL}/inscribirse`} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
                <img src={inscriptionButton} alt="botón fijo inscripción" />
            </Link>
        </div >
    )
}

export { ButtonFixed }