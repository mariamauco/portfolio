import React from 'react'
import NavBar from '../NavBar';
import Intro from '../Intro';
import Projects from '../Projects';
import Footer from '../Footer';
import Stacks from '../Stacks';
import Experiences from '../Experiences';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from '@mui/material'


export default function Home() {
  const buttonStyle = {
    border: '1px solid #000000',
    borderRadius: '20px',
    padding: '24px 16px',
    width: '267px',
    height: '74px',
    textTransform: 'none',
    fontSize: '12px',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, rgba(237, 255, 226, 0.40) 0.87%, rgba(255, 255, 255, 0.00) 21.96%, rgba(255, 255, 255, 0.80) 68.9%), linear-gradient(270deg, #EDFFE2 0.06%, rgba(237, 222, 255, 0.60) 11.31%, rgba(255, 227, 245, 0.30) 24.75%, #FFF 50.03%, rgba(255, 227, 245, 0.30) 73.82%, rgba(237, 222, 255, 0.60) 84.08%, #EDFFE2 99.99%), #FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* NAVIGATION BAR */}
      <NavBar/>

      {/* INTRODUCTION */}
      <Intro/>

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
