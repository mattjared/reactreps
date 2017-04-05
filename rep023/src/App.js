import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listo from './Listo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testo: 0,
    }
  }
  clicker(index) {
    this.setState({
      testo: index,
    });
  }
  render() {
    const testo = this.state.testo;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>mapping items and adding class on click</h2>
        </div>
        {this.props.people.map((people, i) =>
          <Listo
            active={testo === i ? true : false }
            key={i}
            name={people.name}
            location={people.location}
            clicker={this.clicker.bind(this, i)}
          />
        )}
        {this.state.testo}
      </div>
    );
  }
}


export default App;
