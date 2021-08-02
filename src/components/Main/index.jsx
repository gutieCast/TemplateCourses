import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Registration } from 'components/Registration'
import { PaymentMeth } from 'components/Registration/components/PaymentMeth'
import { AboutCourse } from 'components/AboutCourse'
import { ForWho } from 'components/ForWho'
import { Profits } from 'components/Profits'
import { Modules } from 'components/Modules'
import { Teachers } from 'components/Teachers'
import { Contact } from 'components/Contact'
import { Home } from 'components/Home'
import 'components/Main/main.scss'

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/inscribirse" component={Registration} />
                <Route path='/modo-de-pago' component={PaymentMeth} />
                <Route path="/acerca-de" component={AboutCourse} />
                <Route path="/para-quien" component={ForWho} />
                <Route path="/beneficios" component={Profits} />
                <Route path="/modulos" component={Modules} />
                <Route path="/docentes" component={Teachers} />
                <Route path="/contacto" component={Contact} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
