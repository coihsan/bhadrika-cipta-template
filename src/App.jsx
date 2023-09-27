import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";
// import { motion } from "framer-motion";

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Aboutme />
      <Skills/>
      <Offering/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
