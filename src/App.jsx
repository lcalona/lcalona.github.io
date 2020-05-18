import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import SchoolProven from './components/SchoolProven';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/SchoolProven">
        <SchoolProven />
      </Route>
    </Switch>
  );
}

export default App;
