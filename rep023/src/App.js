import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listo from './Listo';
// import classname from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    // this.clicker = this.clicker.bind(this, i);
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
    // const listClass = classname({
    //   listo: true,
    //   active: this.state.testo,
    // });
    const listo = this.state.listo;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>mapping items and adding class on click</h2>
        </div>
        {this.props.people.map((people, i) =>
          <Listo
            name={people.name}
            location={people.location}
            key={i}
            clicker={this.clicker.bind(this, i)}
            // styles={listClass}
            active={listo === i}
          />
        )}
        {this.state.testo}
      </div>
    );
  }
}


export default App;
