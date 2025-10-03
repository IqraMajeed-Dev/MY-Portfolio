
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';   
import AboutMe from './components/Aboutme.jsx';  
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import './components/Achievements.jsx'
import Achievements from './components/Achievements.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />       
      <AboutMe />     
      <Projects />
        <Achievements/>
      <Contact />
      <Footer/>
    
    </div>
  );
}

export default App;


