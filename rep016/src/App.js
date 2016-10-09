import React, { Component } from 'react';
import './App.css';

var Input = React.createClass({
    getInitialState: function(){
        return {
            calcText: 0,
            calcText1: 0,
            calcText2: 0
        }
    },
    onChange: function(event) {
        return (
            this.setState({
                [event.target.name]: event.target.value
            })
        )
    },
    render: function() {
        const calcText = Number(this.state.calcText1) + Number(this.state.calcText2);
        return (
            <div>
                <input type="number" placeholder="1st no." onChange={this.onChange} name="calcText1"/>
                <input type="number" placeholder="2nd no." onChange={this.onChange} name="calcText2"/>
                <p>{calcText}</p>
            </div>
        );
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Reps - Calculator</h2>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
