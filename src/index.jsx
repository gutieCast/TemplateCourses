import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from 'App';
import 'index.scss';

render((
  <HashRouter basename="/home">
    <App />
  </HashRouter>
), document.getElementById('root'));
