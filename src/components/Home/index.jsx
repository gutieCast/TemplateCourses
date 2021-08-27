import React from 'react'
import { Hero } from './components/Hero'
import { AboutCourse } from '../AboutCourse'
import { ForWho } from '../ForWho'
import { Profits } from '../Profits'
import { Modules } from '../Modules'
import { Teachers } from '../Teachers'
import { Contact } from '../Contact'
import { InvestmentInfo } from '../InvestmentInfo'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCourse />
            <ForWho />
            <Profits />
            <Modules />
            <Teachers />
            <InvestmentInfo />
            <Contact />
        </>
    )
}

export { Home }