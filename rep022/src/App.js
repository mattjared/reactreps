import React, { Component } from 'react';
import './App.css';

var toSumItems = [];
// var toSumItems = [];
toSumItems.push({index: 1, value: '.01' })
toSumItems.push({index: 2, value: '32.21' })
toSumItems.push({index: 3, value: '1.31' })

class ToAddList extends Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <ToAddItem key={index} item={item} index={index} removeItem={this.props.removeItem} />
      );
    });
    return (
      <div> {items} </div>
    );
  }
}

class ToAddItem extends Component {
  constructor() {
    super();
    this.onClickClose = this.onClickClose.bind(this);
  }
  onClickClose() {
    // eslint-disable-next-line
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  render() {
    return (
      <div>
        <span id="itemVal"> {this.props.item.value}</span>
        <button type="button" onClick={this.onClickClose}>&times;</button>
      </div>
    );
  }
}

class ToAddForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({
      tempState: event.target.value,
    })
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.tempState);
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="number" placeholder="enter value" id="inputvalthing" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      total: null,
      tempState: '',
      altSumItem: [],
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItemsUp = this.addItemsUp.bind(this);
  }
  addItem(toSumItem) {
    toSumItems.unshift({
      index: toSumItems.length+1,
      value: toSumItem,
    });
    console.log(this.state.altSumItem);
    this.addItemsUp();
  }
  removeItem(itemIndex) {
    toSumItems.splice(itemIndex, 1);
    this.addItemsUp();
  }
  addItemsUp() {
    const allItemsMaths = [];
    for (let i = 0; i < toSumItems.length; i++) {
      const innervalues = toSumItems[i].value;
      const innervaluesNums = Number(innervalues);
      allItemsMaths.push(innervaluesNums);
    }
    function getSum(total, num) {
      return total + num;
    }
    this.setState({
      total: allItemsMaths.reduce(getSum),
    });
  }
  componentDidMount() {
    this.addItemsUp();
  }
  render() {
    return (
      <div className="App">
        <ToAddForm addItem={this.addItem} />
        <ToAddList items={toSumItems} removeItem={this.removeItem} />
        { this.state.total }
      </div>
    );
  }
}

class AppWrap extends Component {
  constructor() {
    super();
    this.state = {
      person1: '',
      person2: '',
      grandTotal: '',
    }
  }
  render() {
    return(
      <div>
        <App wrapName="first"/>
        <App wrapName="second"/>
      </div>
    );
  }
}

export default AppWrap;
