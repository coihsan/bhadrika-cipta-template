import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import { motion } from "framer-motion";
// import {BrowserRouter} from 'react-router-dom';
// import {Aboutme, Hero, Navbar, Contact, Skills, Projects, Offering} from '../components';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Aboutme />
    </div>
  )
}

export default App;
