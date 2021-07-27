import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Registration } from 'components/Registration'
import { AboutCourse } from 'components/AboutCourse'
import { ForWho } from 'components/ForWho'
import { Profits } from 'components/Profits'
import { Modules } from 'components/Modules'
import { Teachers } from 'components/Teachers'
import { Home } from 'components/Home'
import 'components/Main/main.scss'

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/inscribirse" component={Registration} />
                <Route path="/acerca-de" component={AboutCourse} />
                <Route path="/para-quien" component={ForWho} />
                <Route path="/beneficios" component={Profits} />
                <Route path="/módulos" component={Modules} />
                <Route path="/docentes" component={Teachers} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
