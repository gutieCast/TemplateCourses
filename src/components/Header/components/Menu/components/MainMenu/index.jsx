import React from 'react'
import { NavLink } from 'react-router-dom'
import { options } from 'helpers/itemsMenu'
import 'components/Header/components/Menu/components/MainMenu/mainMenu.scss'

const MainMenu = ({ styleAnimation, styleName }) => {
    const body = document.querySelector('body');
    const handleClick = (e) => {
        e.preventDefault();
        if (window.innerWidth < 999) {
            body.classList.toggle('menu-button-actived');
        }
    }
    return (
        <ul className={`main-menu  ${styleName}`}>
            {
                options.map(({ name, link }) =>
                    <li className="menu-item"
                        key={name}
                        onClick={(e) => handleClick(e)}
                    >
                        <NavLink className={`${styleAnimation} uk-animation-slide-top-small menu-link`} to={link}>
                            {name}
                        </NavLink>
                    </li>
                )
            }
        </ul>
    )
}

export { MainMenu }
