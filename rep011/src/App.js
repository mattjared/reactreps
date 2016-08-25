import React, { Component } from 'react';
import './App.css';

var Timer = React.createClass({
    render: function() {
        var x = "asdflj";
        return (
            <div>
                <h1>{x}</h1>
            </div>
        )
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Timer</h2>
        </div>
        <Timer/>
      </div>
    );
  }
}

export default App;
