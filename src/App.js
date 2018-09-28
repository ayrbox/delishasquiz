import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import GameCard from './GameCard';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to Addition Game</h1>
          </header>
          <div className='App-intro'>
            <GameCard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
