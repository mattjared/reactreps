import React, { Component } from 'react';
import './App.css';

var InputBox = React.createClass({
  getInitialState: function(){
    return {
      divText: "hello!",
      inputText: ''
    };
  },
  handleChange: function(event){
        this.setState({ inputText: event.target.value });
    },
  showText: function(event){
    event.preventDefault();
    this.setState({ divText: this.state.inputText});
  },
  render: function(){
    return (
      <div>
        <br />
        <br />
        <form>
          <input type="text" onChange={this.handleChange} />
          <button type="submit" onClick={this.showText}>Go!</button>
        </form>
        <p>{this.state.divText}</p>
      </div>
    )
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Form Submit</h2>
        </div>
        <InputBox />
      </div>
    );
  }
}

export default App;
