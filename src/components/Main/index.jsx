import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Registration } from '../Registration'
import { PaymentMeth } from '../Registration/components/PaymentMeth'
import { FinishedScreen } from '../Registration/components/FinishedScreen'
import { AboutCourse } from '../AboutCourse'
import { ForWho } from '../ForWho'
import { Profits } from '../Profits'
import { Modules } from '../Modules'
import { Teachers } from '../Teachers'
import { Contact } from '../Contact'
import { InvestmentInfo } from '../InvestmentInfo'
import { Home } from '../Home'
import './main.scss'

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/inscribirse`} component={Registration} />
                <Route path={`${process.env.PUBLIC_URL}/modo-de-pago`} component={PaymentMeth} />
                <Route path={`${process.env.PUBLIC_URL}/finalizado`} component={FinishedScreen} />
                <Route path={`${process.env.PUBLIC_URL}/acerca-de`} component={AboutCourse} />
                <Route path={`${process.env.PUBLIC_URL}/para-quien`} component={ForWho} />
                <Route path={`${process.env.PUBLIC_URL}/beneficios`} beneficios component={Profits} />
                <Route path={`${process.env.PUBLIC_URL}/modulos`} component={Modules} />
                <Route path={`${process.env.PUBLIC_URL}/docentes`} component={Teachers} />
                <Route path={`${process.env.PUBLIC_URL}/contacto`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL}/inversion}`} component={InvestmentInfo} />
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            </Switch>
        </main>
    )
}

export default Main
