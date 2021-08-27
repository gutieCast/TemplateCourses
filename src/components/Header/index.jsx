import React from 'react';
import { Logo } from './components/Logo'
import { MainMenu } from './components/MainMenu';
import './header.scss';

const Header = () => {
    return (
        <header id="header">
            <Logo />
            <MainMenu />
        </header>
    )
}

export default Header
