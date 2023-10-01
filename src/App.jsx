import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills2 from "./components/Skills-2";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar/>
      <Hero />
        <Aboutme />
        
        <div className="h-[60%] w-full bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950 ">
          <Skills/>
          <Offering/>
        </div>
        
        <Projects/>
        <Contact/>
      
    </Router>
  )
}

export default App;
