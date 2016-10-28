import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tax Bracket Calculator</h2>
        </div>
        <h3>What is your yearly salary?</h3>
        <Input />
      </div>
    );
  }
}

export default App;
