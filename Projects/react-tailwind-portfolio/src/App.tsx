import { useState } from "react";
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <main>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
    </main>
    </>
  );
}

export default App;
