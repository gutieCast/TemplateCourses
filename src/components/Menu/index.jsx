import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { menu } from '../../helpers/itemsMenu'
import './menu.scss'

const Menu = ({ styleAnimation, styleName }) => {
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
                menu.map(({ name, link, hash }) =>
                    <li className={`${styleAnimation} menu-item`}
                        key={name}
                        onClick={(e) => handleClick(e)}
                    >
                        <NavLink
                            className="menu-link"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to={link}
                        >
                            {name}
                        </NavLink>
                    </li>
                )
            }
        </ul>
    )
}

export default Menu
