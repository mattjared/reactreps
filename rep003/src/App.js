import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var InputBox = React.createClass({
  getInitialState: function(){
    return {
      text: "hello!"
    };
  },
  showText: function(event){
    event.preventDefault();
    var theInputText = ReactDOM.findDOMNode(this.refs.theInput).value;
    this.setState({text: theInputText});
  },
  render: function(){
    return (
      <div>
        <br />
        <br />
        <form>
          <input type="text" ref="theInput" />
          <button type="submit" onClick={this.showText}>Go!</button>
        </form>
        <p>{this.state.text}</p>
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
