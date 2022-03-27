import React, { Component } from "react";


class Counter extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button onClick={this.incrementCount}> [Class] I was clicked {this.state.count}</button>
    );
  }
}

export default Counter;