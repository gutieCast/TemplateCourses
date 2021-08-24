import React from 'react';
import { Logo } from 'components/Header/components/Logo';
import { MainMenu } from 'components/Header/components/MainMenu';
import 'components/Header/header.scss';

const Header = () => {
    return (
        <header id="header">
            <Logo />
            <MainMenu />
        </header>
    )
}

export default Header
