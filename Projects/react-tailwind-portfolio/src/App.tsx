import { useState } from 'react';
import { ReactLenis } from 'lenis/react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Work></Work>
        <Review></Review>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </ReactLenis>
  );
}

export default App;
