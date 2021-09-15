import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { InscriptionForm } from './screens/InscriptionForm'
import { PaymentMeth } from './screens/PaymentMeth'
import { FinishedScreen } from './screens/FinishedScreen'
import { Home } from './screens/Home'
import './App.scss'

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

smoothScrollPolyfill.polyfill();

const App = () => (
  <Switch>
    <Route path={`${process.env.PUBLIC_URL}/inscribirse`} component={InscriptionForm} />
    <Route path={`${process.env.PUBLIC_URL}/modo-de-pago`} component={PaymentMeth} />
    <Route path={`${process.env.PUBLIC_URL}/finalizado`} component={FinishedScreen} />
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
  </Switch>
);

export default App