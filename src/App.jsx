import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Offering from "./components/Offering";
import Contact from "./components/Contact";

import './App.css';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/App">
      <Routes>
      <Route path="/App"/>
      <Navbar/>
      <Hero />
        <Aboutme />
        <div className="h-[60%] w-full bg-gradient-to-t from-zinc-950 via-[#4e6eff0e] to-zinc-950 ">
          <Skills/>
          <Offering/>
        </div>
        <Projects/>
        <Contact/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
