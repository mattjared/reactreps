import React, { Component } from 'react';
import './App.css';

var InputBox = React.createClass({
    getInitialState: function(){
        return {
            text: ""
        };
    },
    handleChange: function(event){
        this.setState({ text: event.target.value });
    },
    render: function() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <p>{this.state.text}</p>
            </div>
        );
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Input</h2>
        </div>
        <p className="App-intro">What's your name?</p>
        <InputBox />
      </div>
    );
  }
}

export default App;
