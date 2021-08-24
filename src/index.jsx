import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import App from 'App';
import 'index.scss';

smoothScrollPolyfill.polyfill();

render((
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
), document.getElementById('root'));
