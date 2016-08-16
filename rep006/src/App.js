import React, { Component } from 'react';
import './App.css';

var NavH2 = props => <h2 onClick={props.onClick} className={props.isActive ? 'active' : ''}>{props.text}</h2>

var TabbedNav = React.createClass({
    getInitialState: function() {
        return {
            activeTab: 1,
            contentClass: 'hidden'
        }
    },
    handleClick: function(targetState) {
        return () => {
          console.info(this);
          return this.setState({activeTab: targetState})
        };
    },
    renderBody: function(){
      if (this.state.activeTab === 1) {
        return (
            <p>First Section</p>
        )
      } else if (this.state.activeTab === 2) {
        return (
          <p>Second Section</p>
        )
      }
    },
    render: function() {
        return (
            <div>
                <nav>
                    <NavH2 isActive={this.state.activeTab === 1} text="First Item" onClick={this.handleClick(1)}/>
                    <NavH2 isActive={this.state.activeTab === 2} text="Second Item" onClick={this.handleClick(2)}/>
                </nav>
                <div className="content">
                    {this.renderBody()}
                </div>
            </div>
        )
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabbedNav />
      </div>
    );
  }
}

export default App;
