
import { Routes, Route } from "react-router-dom";
//
import CharactersList from "./pages/CharactersList";
import CharactersListUseHook from "./pages/CharactersListUseHook";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersListUseHook />}></Route>
        <Route path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
