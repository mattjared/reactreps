import React, { Component } from 'react';
import './App.css';

var Button = props => <span onClick={props.onClick} className={props.btnColor}>{ props.text }</span>

var ButtonGrow = React.createClass({
    getInitialState: function(){
        return {
            blueButton: null,
        }
    },
    handleClick: function(targetState) {
        return () => {
            console.info(this);
        };
    },
    render: function(){
        return (
            <div>
                <div className="content">
                    <div className="fifty">
                        <Button text="BLUE BUTTON" btnColor="blue" onClick={this.handleClick()}/>
                    </div>
                    <div className="fifty">
                        <Button text="RED BUTTON" btnColor="red" onClick={this.handleClick()}/>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <p>The thing</p>
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
              <h2>Click a button grow a square</h2>
            </div>
            <ButtonGrow/>
        </div>
    );
  }
}

export default App;
