import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Offering from "../components/Offering";
import Contact from "../components/Contact";

import '../App.css';

export default function Root() {
  return (
    <>
      <div id="sidebar">
      <Navbar/>
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Offering />
      <Contact />
      </div>
    </>
  );
}
