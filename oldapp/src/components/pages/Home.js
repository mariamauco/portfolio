import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';

function Home() {
    return (
      <>
        <MainSection />
        <About />
        <Projects />
        <Contact />

      </>
    );
  }
  

export default Home;
