import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorkerResgistration from './serviceWorkerRegistration';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorkerResgistration.register()

