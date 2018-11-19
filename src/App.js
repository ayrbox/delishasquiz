import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';
// import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './views/landing';
import GameCard from './GameCard';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/test" component={GameCard} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
