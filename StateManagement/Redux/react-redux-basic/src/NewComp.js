import React, { Component } from "react";

class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  ButtonChange = () => {
    this.setState({
      message: "Thanks",
    });
  };

  styles = {
    fontStyle: "Italic",
    color: "purple",
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>---------Use state-------</h3>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>Test</button>
      </div>
    );
  }
}

export default NewComp;
