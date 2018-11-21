import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './views/landing';
import GameCard from './GameCard';
import Quiz from './views/quiz';
import Settings from './views/settings';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Quiz} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/test" component={GameCard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
