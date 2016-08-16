import React, { Component } from 'react';
import './App.css';

var ButtonThing = React.createClass({
    getInitialState: function(){
        return {
            color: 'blue',
            text: 'Blue'
        }
    },
    changeColor: function(){
        if (this.state.color === 'blue') {
            this.setState({color: 'orange'});
            this.setState({text: 'Orange'});
        } else {
            this.setState({color: 'blue'});
            this.setState({text: 'Blue'});
        }
    },
    render: function() {
        return (
            <div>
                <button onClick={this.changeColor}>Add Class!</button>
                <div className={this.state.color}>{this.state.text}</div>
            </div>
        )
    }
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Adding a CSS class</h2>
        </div>
        <ButtonThing />
      </div>
    );
  }
}

export default App;
