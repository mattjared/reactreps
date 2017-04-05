import React, { Component } from 'react';

class Listo extends Component {
  render() {
    return(
      <div
        className="listo"
        onClick={this.props.clicker}
        style={this.props.active? {color: 'blue'} : null }
      >
        <span>{this.props.active}</span>
        <h2>{this.props.name}</h2>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default Listo;
// https://jsfiddle.net/69z2wepo/20164/