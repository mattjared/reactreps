import React, { Component } from 'react';
import './App.css';

var TabbedNav = React.createClass({
    getInitialState: function() {
        return {
            navClass: '',
            contentClass: 'hidden'
        }
    },
    handleClick: function(){
        if (this.state.navClass !== 'active') {
            this.setState({navClass: 'active'});
        }
        if (this.state.contentClass === 'hidden') {
            this.setState({contentClass: 'visible'});
        }
    },
    render: function() {
        return (
            <div>
                <nav onClick={this.handleClick} className={this.state.navClass}>
                    <h2>First Item</h2>
                    <h2>Second Item</h2>
                </nav>
                <div className="content">
                    <p className={this.state.contentClass}>First Section</p>
                    <p>Second Section</p>
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
