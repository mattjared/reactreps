import React, { Component } from 'react';
import './App.css';

var Page = React.createClass({
    render: function() {
        return(
            <div className="App">
                <div className="App-header">
                  <h2>Get your reps in!</h2>
                </div>
                <p>It is {this.props.date.toLocaleTimeString()} </p>
            </div>
        )
    }
});

class App extends Component {
  render() {
    return (
      <Page date={new Date()} />
    );
  }
}

export default App;
