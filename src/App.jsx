import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router basename="/App" >
      <Routes>
      <Route path="/" element={<App />} exact>
        <Navbar/>
        <Hero />
        <Aboutme />
        <Skills/>
        <Offering/>
        <Projects/>
        <Contact/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
