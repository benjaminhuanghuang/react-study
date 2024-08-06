import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import AboutSection from './Components/AboutSection/AboutSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import Spacer from './Components/Spacer/Spacer';
import JoinSection from './Components/JoinSection/JoinSection';
import PlansSection from './Components/PlansSection/PlansSection';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Hero />  
      <AboutSection />
      <Spacer />
      <FeaturesSection />
      <JoinSection/>
      <PlansSection />
    </div>
  )
}

export default App
