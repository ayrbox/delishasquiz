import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './views/landing';
import GameCard from './GameCard';
import Quiz from './views/quiz';
import Result from './views/result';
import Settings from './views/settings';
import About from './views/about';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Router basename="/mathsquiz">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Quiz} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/test" component={GameCard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
