import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewCompStore extends Component {
  styles = {
    fontStyle: 'Italic',
    color: 'purple'
  }

  render () {
    return (
      <div className='App'>
        <h3 style={this.styles}>Use Store</h3>
        <h3 style={this.styles}>{this.props.message}</h3>
        <button onClick={this.props.ButtonChange}>Test</button>
      </div>
    )
  }
}
 
const mapStatetoProps = (state) =>{
  return {
    message: state.message
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    ButtonChange: () =>{
      dispatch({
        type: 'Change'
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NewCompStore);