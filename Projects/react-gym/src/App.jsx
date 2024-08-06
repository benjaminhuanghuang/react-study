import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import AboutSection from './Components/AboutSection/AboutSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Hero />  
      <AboutSection />
      <FeaturesSection />
    </div>
  )
}

export default App
