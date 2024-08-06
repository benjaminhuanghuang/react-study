import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import AboutSection from './Components/AboutSection/AboutSection';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Hero />  
      <AboutSection />
    </div>
  )
}

export default App
