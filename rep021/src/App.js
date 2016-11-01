import React, { Component } from 'react';
import './Normalize.css';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = {
        wordGoal: '',
        words: ' ',
        wordCount: 0,
        checker: ' '
    }
    }
    handleChange(e) {
        this.setState({
            wordGoal: e.target.value,
        })
    }
    handleTyping(e) {
        this.setState({
            words: e.target.value,
            wordCount: e.target.value.length,
            checker: this.state.wordCount / this.state.wordGoal,
        })
    }
    render() {
        const appStyle = {
            backgroundColor: 'rgba(0, 255, 0,'+ this.state.checker+')',
        }
        return (
            <div className="App" style={appStyle} key="this.state.checker">
                <div className="App-header">
                    <h2>How many characters do you need to write?</h2>
                    <input type="number" required onChange={this.handleChange}/>
                    <h2>{this.state.wordGoal}</h2>
                </div>
                <textarea
                    onChange={this.handleTyping}
                    ref=""
                    name="textarea"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Start typin yo!">
                </textarea>
                <div className="subtext">
                    <p>Reach your goal to turn the page green</p>
                    <p>Character Count: {this.state.wordCount }</p>
                </div>
            </div>
        );
    }
}

export default App;
