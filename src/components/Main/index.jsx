import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AboutCourse } from '../AboutCourse'
import { ForWho } from '../ForWho'
import { Profits } from '../Profits'
import { Modules } from '../Modules'
import { Teachers } from '../Teachers'
import { Contact } from '../Contact'
import { InvestmentInfo } from '../InvestmentInfo'
import './main.scss'

const Main = () => {
    return (
        <>
            <main className="main">
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/acerca-de`} component={AboutCourse} />
                    <Route path={`${process.env.PUBLIC_URL}/para-quien`} component={ForWho} />
                    <Route path={`${process.env.PUBLIC_URL}/beneficios`} beneficios component={Profits} />
                    <Route path={`${process.env.PUBLIC_URL}/modulos`} component={Modules} />
                    <Route path={`${process.env.PUBLIC_URL}/docentes`} component={Teachers} />
                    <Route path={`${process.env.PUBLIC_URL}/contacto`} component={Contact} />
                    <Route path={`${process.env.PUBLIC_URL}/inversion}`} component={InvestmentInfo} />
                </Switch>

                <AboutCourse />
                <ForWho />
                <Profits />
                <Modules />
                <Teachers />
                <InvestmentInfo />
                <Contact />
            </main>
        </>
    )
}

export { Main }
