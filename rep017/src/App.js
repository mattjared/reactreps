import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Inputs (again)</h2>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
