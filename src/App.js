import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import GameCard from './GameCard';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Addition Game</h1>
      </header>
      <div className="App-intro">
        <GameCard />
      </div>
    </div>
  </Provider>
);

export default App;
