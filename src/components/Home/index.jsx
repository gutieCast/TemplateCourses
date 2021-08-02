import React from 'react'
import { Hero } from 'components/Home/components/Hero'
import { AboutCourse } from 'components/AboutCourse'
import { ForWho } from 'components/ForWho'
import { Profits } from 'components'
import { Modules } from 'components/Modules'
import { Teachers } from 'components/Teachers'
import { Contact } from 'components/Contact'
import { InvestmentInfo } from 'components/InvestmentInfo'

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