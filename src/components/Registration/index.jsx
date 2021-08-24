import React from 'react'
import { Switch, Route } from 'react-router-dom'
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { DefaultForm } from 'components/Registration/components/DefaultForm'
import { InscriptionForm } from './components'

smoothScrollPolyfill.polyfill();

const Registration = () => {
    return (
        <Switch>
            {/* <Route path="/inscribirse/:optionSelected" component={InscriptionForm} /> */}
            <Route path="/inscribirse/" component={InscriptionForm} />
        </Switch>
    )
}

export { Registration }
