import './App.css';
import { Component } from 'react';
// components
import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
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
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    )
  }
}
export default App;
