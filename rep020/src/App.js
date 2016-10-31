import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h2>Turn any date into a color.</h2>
            <h6>Enter a date below and get a color</h6>
            <Input />
        </div>
    );
  }
}

export default App;
