import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment(event) {
    let { counter } = this.state;
    counter += 1;
    this.setState({
      counter
    });
  }
  render() {
    let counter = this.state.couter;
    return (
      <div>
        <h1>Apps</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={ this.increment.bind(this) }>Increment</button> 
      </div>
    )
  }
}