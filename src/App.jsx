import React from 'react'
import { createBrowserHistory } from 'history';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import Header from './components/Header';
import Main from './components/Main'
import { Footer } from './components/index'
import './App.scss'

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

smoothScrollPolyfill.polyfill();

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App