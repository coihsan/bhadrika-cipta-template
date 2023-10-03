import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Navbar/>
      <Hero />
      <Aboutme />
      <Skills/>
      <Offering/>
      <Projects/>
      <Contact/>
    </section>
  )
}

export default App;
