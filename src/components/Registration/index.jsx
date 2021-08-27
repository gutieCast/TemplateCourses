import React from 'react'
import { Switch, Route } from 'react-router-dom'
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { DefaultForm } from './components/DefaultForm'
import { InscriptionForm } from './components'

smoothScrollPolyfill.polyfill();

const Registration = () => {
    return (
        <Switch>
            {/* <Route path="/inscribirse/:optionSelected" component={InscriptionForm} /> */}
            <Route path={`${process.env.PUBLIC_URL}/inscribirse`} component={InscriptionForm} />
            {/* <Route path={`${process.env.PUBLIC_URL}/modo-de-pago`} component={}  /> */}
        </Switch>
    )
}

export { Registration }
