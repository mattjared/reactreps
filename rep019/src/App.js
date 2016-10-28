import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's your yearly salary?</h2>
          <h4>And how are you filing?</h4>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
