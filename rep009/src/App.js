import React, { Component } from 'react';
import './App.css';

var Button = props => <span onClick={props.onClick} className={props.btnColor}>{ props.text }</span>

var ButtonGrow = React.createClass({
    getInitialState: function(){
        return {
            blueButton: null,
            currentClicks: 0,
        }
    },
    handleClick: function(targetState) {
        return () => {
            return this.setState({ currentClicks: this.state.currentClicks + 1})
        }
    },
    render: function(){
        var currentDivs = [];
        for (var i = 0; i < this.state.currentClicks; i++) {
            currentDivs.push(<div className="aSingleDiv"></div>);
        };
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
                <div className="content text-center">
                    {this.state.currentClicks}
                    <div class="div-contain">
                        {currentDivs}
                    </div>
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
