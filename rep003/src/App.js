import React, { Component } from 'react';
import './App.css';

var InputBox = React.createClass({
  getInitialState: function(){
    return {
      text: "hello!"
    };
  },
  submitForm: function(event){
    event.preventDefault();
    this.setState({text: ReactDOM.findDOMNode(this.refs.theInput).value});
  },
  render: function(){
    return (
      <div>
        <br />
        <br />
        <form>
          <input type="text" ref="theInput" />
          <button type="submit" onClick={this.submitForm}>Go!</button>
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
