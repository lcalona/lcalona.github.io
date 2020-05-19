import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import './index.css';
import App from './App';
import ScrollToTop from './util/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
