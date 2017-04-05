import React, { Component } from 'react';
import classname from 'classnames';

class Listo extends Component {
  render() {
    const classy = classname({
      listo: true,
      active: this.props.active ? true : null,
    })
    return(
      <div
        onClick={this.props.clicker}
        className={classy}
      >
        <h2>{this.props.name}</h2>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default Listo;
// https://jsfiddle.net/69z2wepo/20164/