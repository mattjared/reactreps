import React, { Component } from 'react';
import './App.css';

var Button = props => <span onClick={props.onClick} className={props.btnColor}>{ props.text }</span>

var ButtonGrow = React.createClass({
    getInitialState: function(){
        return {
            currentBlueClicks: 0,
            currentRedClicks: 0
        }
    },
    handleClick: function(targetState) {
        return () => {
            if (targetState === 'blue') {
                console.log('blue')
                return this.setState({ currentBlueClicks: this.state.currentBlueClicks + 1 })
            } else if (targetState === 'red') {
                console.log('red')
                return this.setState({ currentRedClicks: this.state.currentRedClicks + 1 })
            }
        }
    },
    renderDivs: function() {
        var currentBlueDivs = [];
        var currentRedDivs = [];
        for (var i = 0; i < this.state.currentBlueClicks; i++) {
            currentBlueDivs.push(<div className="aSingleBlueDiv"></div>);
        };
        for (var j = 0; j < this.state.currentRedClicks; j++) {
            currentRedDivs.push(<div className="aSingleRedDiv"></div>);
        };
        return (
            <div>
                <p>Blue Clicks: {this.state.currentBlueClicks}</p>
                <p>Red Clicks: {this.state.currentRedClicks}</p>
                <div>
                    { currentBlueDivs }
                    { currentRedDivs }
                </div>
            </div>
        )

    },
    render: function(){
        return (
            <div>
                <div className="content">
                    <div className="fifty">
                        <Button text="BLUE BUTTON" btnColor="blue" onClick={this.handleClick('blue')}/>
                    </div>
                    <div className="fifty">
                        <Button text="RED BUTTON" btnColor="red" onClick={this.handleClick('red')}/>
                    </div>
                </div>
                <div className="content text-center">
                    <div className="div-contain">
                        {this.renderDivs()}
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
