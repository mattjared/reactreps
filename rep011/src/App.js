import React, { Component } from 'react';
import './App.css';

var Timer = React.createClass({
    getInitialState: function() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var meridiem = 'AM';
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var seconds = currentTime.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0) {
            hours = 12;
        }
        var timer = hours + ":" + minutes + ":" + seconds + " " + meridiem;

        return {
            initTimer: timer
        }
    },
    render: function() {
        return (
            <div>
                <h1>You've been on this site since: { this.state.initTimer }.</h1>
            </div>
        )
    }
});

class App extends Component {
  render() {
    var x = "React Reps - Timer";
    return (
      <div className="App">
        <div className="App-header">
          <h2>{x}</h2>
        </div>
        <Timer/>
      </div>
    );
  }
}

export default App;
