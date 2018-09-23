import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increaseIfOdd = this.increaseIfOdd.bind(this);
    this.increaseAsync = this.increaseAsync.bind(this);
  }

  increaseIfOdd() {
    if(this.props.value % 2 === 0) {
      return;
    }
    this.props.onIncrease();
  }

  increaseAsync() {
    setTimeout(this.props.onIncrease, 1000);
  }

  render() {
    const { value, onIncrease, onDecrease } = this.props;
    return (
      <div id="counter">
        <span id="value">{value}</span>
        <button id="increase" onClick={onIncrease}>+</button>
        <button id="decrease" onClick={onDecrease}>-</button>
        <button id="increaseIfOdd" onClick={this.increaseIfOdd}>increase if odd</button>
        <button id="increaseAsync" onClick={this.increaseAsync}>increase async</button>
      </div>
    )
  }
}

export default Counter;