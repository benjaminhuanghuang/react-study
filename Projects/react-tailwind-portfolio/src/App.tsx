import { useState } from "react";
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <main>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Review></Review>
    </main>
    </>
  );
}

export default App;
