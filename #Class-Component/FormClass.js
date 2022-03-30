import React, {Component } from "react";
import PropTypes from "prop-types";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  /*
  */
  handleUsernameChange = (event)=>{
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();

  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <button type="sybmit">Submit</button>
      </form>
    )
  }
}

FormClass.propTypes = {};

export default FormClass;
