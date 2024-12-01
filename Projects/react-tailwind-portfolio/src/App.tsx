import { useState } from "react";
// Components
import Header from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <main>
      <Hero></Hero>
    </main>
    </>
  );
}

export default App;
