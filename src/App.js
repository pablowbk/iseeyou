import React, { Component } from 'react';
import Nav from './comps/nav/Nav';
import './App.css';
import LightSwitchExample from './Timeout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <LightSwitchExample />
      </div>
    );
  }
}

export default App;
