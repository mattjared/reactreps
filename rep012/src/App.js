import React, { Component } from 'react';
import './App.css';

var Intro = React.createClass({
    render:function() {
        return (
            <div>
                <div className="App-header">
                    <h2>React Reps - React Patterns Ride Along</h2>
                    <h5 className="intro">Referencing <a href="http://reactpatterns.com/">this</a> and going through each skillset</h5>
                </div>
            </div>
        )
    }
});

const StateLessFunctions = (props, context) =>
    <div style={{color: context.color}}>Hi {props.name}</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <div className="section">
            <h3 className="section-intro">Stateless Functions</h3>
            <StateLessFunctions name="Matt" />
        </div>
        <div className="section">
            <h3 className="section-intro">JSX Spread Attributes</h3>
        </div>
      </div>
    );
  }
}

export default App;
