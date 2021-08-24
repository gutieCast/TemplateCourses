import React from 'react'
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import Header from 'components/Header';
import Main from 'components/Main'
import { Footer } from 'components/Footer'
import 'App.scss'

smoothScrollPolyfill.polyfill();

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App