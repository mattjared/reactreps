import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const data = [
  {
    name: 'R2D2',
    color: 'blue',
    language: 'droidspeak',
  },
  {
    name: 'C3PO',
    color: 'gold',
    language: 'all of them',
  },
  {
    name: 'K2S0',
    color: 'black',
    language: 'sarcasm',
  },
  {
    name: 'BB8',
    color: 'orange',
    language: 'droidspeak',
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.changer = this.changer.bind(this);
    this.state = {
      astromech: [],
      counter: ''
    }
  }
  changer(e) {
    e.preventDefault();
    this.setState({
      counter: Number(this.state.counter) + 1,
      astromech: data[this.state.counter % data.length],
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Using objects in state</h2>
        </div>
        <p className="App-intro">Click the below to change which state is visible</p>
        <button onClick={this.changer}>Click to change</button>
        <p>Droid Name:{this.state.astromech.name}</p>
        <p>Droid Color:{this.state.astromech.color}</p>
        <p>Droid Language:{this.state.astromech.language}</p>
      </div>
    );
  }
}

export default App;
