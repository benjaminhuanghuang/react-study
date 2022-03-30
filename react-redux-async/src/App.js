import './App.css';
import { Component } from 'react';
import NewComp from './NewComp';
import NewCompStore from './NewCompStore';
//
class App extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }

  render(){
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp/>
        <NewCompStore/>
      </div>
    )
  }
}
export default App;
