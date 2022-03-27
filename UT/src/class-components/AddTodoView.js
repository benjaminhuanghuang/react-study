import React, { Component } from "react";

class AddTodoView extends Component {
  render() {
    return (
      <header className="header">
        <h1> todos </h1>
        <input className="new-todo" type="text" onKeyUp={(e) => this.handleClick(e)} ref="input" />
      </header>
    );
  }

  handleClick(e) {
    if (e.keyCode === 13) {
      const node = this.refs.input;
      const text = node.value.trim();
      text && this.props.onAddClick(text);
      node.value = "";
    }
  }
}
