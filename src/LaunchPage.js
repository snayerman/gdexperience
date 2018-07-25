import React, { Component } from 'react';
import logo from './logo.svg';
import first from './pic/First.png';
import second from './pic/Second.png';
import third from './pic/Third.png';

import './LaunchPage.css';

export default class LaunchPage extends Component {
  render() {
    return (
      <div>

      <img src={first} className="landing-pic" />
      <hr></hr>
      <img src={second} className="landing-pic"/>
      <hr></hr>
      <img src={third} className="landing-pic"/>
      </div>
    );
  }
}