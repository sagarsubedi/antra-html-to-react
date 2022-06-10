import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation'
import Projects from './components/Projects';
import Summary from './components/Summary';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
