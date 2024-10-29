// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import NavbarMultiLevel from "./components/NavBarMultiLevel";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <NavbarMultiLevel/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
