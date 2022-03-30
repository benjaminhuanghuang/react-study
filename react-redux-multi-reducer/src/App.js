import './App.css';
import { Component } from 'react';
// components
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

class App extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }

  render(){
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <CakeContainer/>
        <IceCreamContainer/>
      </div>
    )
  }
}
export default App;
