import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    console.log("Props: ", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}
