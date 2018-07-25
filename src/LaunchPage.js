import React, { Component } from 'react';
import logo from './logo.svg';
import first from './pic/First.png';
import second from './pic/Second.png';
import third from './pic/Third.png';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GoBuddy Demo</h1>
        </header>
        <br></br>
      <img src={first} className="landing-pic"/>
      <hr></hr>
      <img src={second} className="landing-pic"/>
      <hr></hr>
      <img src={third} className="landing-pic"/>
      </div>
    );
  }
}