import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './components/Main/Main/Main'
import { Cards } from './components/Cards/Cards/Cards'
import './App.css'


const App: React.FunctionComponent = () => {


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cards" exact component={Cards} />
        <Route component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
