import React from 'react'
import 'components/Header/components/Menu/components/BurguerButton/burguerButton.scss'

const BurguerButton = ({ children }) => {
    const body = document.querySelector('body');
    const navMobileToggle = (e) => {
        e.preventDefault();
        body.classList.toggle('menu-button-actived');
    }
    return (
        <>
            <div className="menu-button-box">
                <button type="button" id="menu-button-toggle" onClick={(e) => navMobileToggle(e)}>
                    <span></span>
                </button>
            </div>
            {children}
        </>
    )
}

export { BurguerButton }
