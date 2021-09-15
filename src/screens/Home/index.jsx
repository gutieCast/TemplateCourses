import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Header from '../../components/Header'
import { ButtonFixed } from './components/ButtonFixed'
import { Hero } from '../../components/Hero'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

const Home = () => {
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