import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import GameCard from "./GameCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Addition Game</h1>
        </header>
        <div className="App-intro">
          <GameCard />
        </div>
      </div>
    );
  }
}

export default App;
