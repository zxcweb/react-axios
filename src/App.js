import React, { Component } from 'react';
import logo from './logo.svg';
import Test from './test';
import Loading from './components/Loading';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Test/>
        </header>
        <Loading isShow={true}/>
      </div>
    );
  }
}

export default App;
