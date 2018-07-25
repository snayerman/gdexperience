import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoBuddy from './Components/GoBuddy/GoBuddy';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GoBuddy Demo</h1>
        </header>

        <GoBuddy />
      </div>
    );
  }
}
