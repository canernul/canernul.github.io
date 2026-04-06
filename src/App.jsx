import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import Education from './components/Education';

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Education/>
      <Contact />
    </div>
  )
}

export default App
