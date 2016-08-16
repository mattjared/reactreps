import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var Divver = React.createClass({
    getInitialState:function(){
        return {
            elWidth: '',
            elHeight: '',
        }
    },
    componentDidMount: function(){
        this.setState({
            elWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width,
            elHeight: ReactDOM.findDOMNode(this).getBoundingClientRect().height
        })
    },
    render: function() {
        return (
            <div className="elWdith">
                <p>The width of the div is: <span>{this.state.elWidth}</span></p>
                <p>The height of the div is: <span>{this.state.elHeight}</span></p>
            </div>
        );
    }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's the width of element?</h2>
        </div>
        <Divver />
      </div>
    );
  }
}

export default App;
