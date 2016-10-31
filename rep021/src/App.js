import React, { Component } from 'react';
import './Normalize.css';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = {
        topText: '',
        words: ' ',
        wordCount: ' ',
        checker: 'DONT WORK'
    }
    }
    handleChange(e) {
        this.setState({
            topText: e.target.value,
        })
    }
    handleTyping(e) {
        this.setState({
            words: e.target.value,
            wordCount: e.target.value.length
        })
    }
    render() {
        let appDiv = {background: "white"} ? this.state.wordCount > 10 : {background: "blue"};
        return (
            <div className="App" style={appDiv}>
                <div className="App-header">
                    <h2>How many characters do you need to write?</h2>
                    <input type="number" required onChange={this.handleChange}/>
                    <h2>{this.state.topText}</h2>
                    <p>The more you type and get closer to your goal the more the page will turn green.</p>
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
                <p key={this.state.wordCount}>{this.state.wordCount}</p>
                <h3>hey there</h3>
            </div>
        );
    }
}

export default App;
