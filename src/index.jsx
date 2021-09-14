import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import ScrollToTop from './helpers/ScrollToTop';
import App from './App';
import './index.scss';

smoothScrollPolyfill.polyfill();

render((
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
),
  document.getElementById('root')
);
