import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";

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

    </div>
  );
}

export default App;
