import './App.css';
import { Component } from 'react';
// components
import UsersContainer from './components/UsersContainer'

//
class App extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }

  render(){
    return (
      <div className='App'>
        <UsersContainer />
      </div>
    )
  }
}
export default App;
