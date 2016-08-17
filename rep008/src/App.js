import React, { Component } from 'react';
import './App.css';

var Ranger = React.createClass({
    getInitialState: function() {
        return {
            rangeVal: 2
        }
    },
    handleChange: function(event) {
        event.preventDefault();
        this.setState({rangeVal: event.target.value })
    },
    render: function() {
        return (
            <div>
                <br />
                <br />
                <br />
                <input type="range" onChange={this.handleChange} min="0" max="1000" value={this.state.rangeVal}/>
                <h1>{this.state.rangeVal}</h1>
            </div>
        )
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HTML Range</h2>
        </div>
        <Ranger />
      </div>
    );
  }
}

export default App;
