import React from 'react'
import Header from '../../components/Header'
import { ButtonFixed } from './components/ButtonFixed'
import { Hero } from '../../components/Hero'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

const Home = () => {
    sessionStorage.removeItem('option');
    return (
        <>
            <Header />
            <ButtonFixed />
            <Hero />
            <Main />
            <Footer />
        </>
    )
}

export { Home }