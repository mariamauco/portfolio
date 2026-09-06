import React, { useEffect } from 'react';
import Intro from '../Intro';
import Projects from '../Projects';
import Footer from '../Footer';
import Stacks from '../Stacks';
import Experiences from '../Experiences';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';


export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const target = location.state?.scrollTo;

    if (!target) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navigate(location.pathname, { replace: true, state: {} });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location, navigate]);

  return (
   <Box
      sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
      }}
    >
      {/* INTRODUCTION */}
      <Container id="home-top" sx={{  }}>
        <Intro id="home-top"/>
      </Container>

      {/* STACKS */}
      <Stacks/>

      {/* EXPERIENCE */}
      <Experiences/>
      
      {/* PROJECTS */}
      <Projects/>

      {/* FOOTER */}
      <Footer/>
    </Box>
  )
}
