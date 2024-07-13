import "./App.css";
import { Component } from "react";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
//
class App extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
  };

  render() {
    return (
      <div className="App">
        <NewCakeContainer />
        <HooksCakeContainer />
      </div>
    );
  }
}
export default App;
