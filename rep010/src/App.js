import React, { Component } from 'react';
import './App.css';

var PuttPutt = React.createClass({
    getInitialState: function() {
        return {
            firstText: '',
            htOutput: '',
        };
    },
    textInput: function(event) {
        this.setState({
            firstText: event.target.value,
            htOutput: event.target.value,
        });
    },
    render: function() {
        return (
            <div className="col-wrap">
                <div className="col left`">
                    <input type="text" placeholder="The Main Headline" onChange={this.textInput}/>
                </div>
                <div className="col">
                    <textarea disabled value={this.state.htOutput}/>
                    <h1><pre><code><h1>{this.state.firstText}</h1></code></pre></h1>
                </div>
            </div>
        )
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Input to HTML</h2>
        </div>
        <PuttPutt />
      </div>
    );
  }
}

export default App;
