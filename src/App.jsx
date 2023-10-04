import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Offering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
