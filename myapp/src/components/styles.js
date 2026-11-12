import React from 'react'
// import NavBar from '../NavBar';
// import Intro from '../Intro';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const LinkedInIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${theme.palette.primary.secondary}`} class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
  )
}
export const MenuIcon = () => {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill={`${theme.palette.primary.secondary}`}  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke={`${theme.palette.primary.secondary}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  )
}

export const theme = createTheme({
  // In your theme setup
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    h1: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '40px', fontWeight: 400, lineHeight: '48px' },
    h2: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '30px', fontWeight: 400, lineHeight: '48px' },
    h3: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, lineHeight: 1.3 },
    h4: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: 1.4 },
    h5: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '23px' },
    code: {
        fontFamily: 'Fira Code, monospace',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#a9eb8b',
      secondary: '#61a73e'
    },
    secondary: {
    main: '#dea3f9',
    },
    text: {
    primary: '#434941ff',
    secondary: '#5b545eff',
    faint:'#838782ff'
    },
  },
})

export const buttonStyle = {
    border:  `2px solid${theme.palette.primary.main}`,
    borderRadius: '25px',
    padding: '20px 12px',
    height: '50px',
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '23px',
    color: `${theme.palette.text.primary}`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}`,
    },
  }

  export const cardStyle = {

  }

export const tagStyle = {
  px: 1,
  py: 0.5,
  borderRadius: 999,
  backgroundColor: 'rgba(154, 210, 157, 0.14)',
  color: 'rgba(28, 36, 28, 0.93)',
  border: `2px solid ${theme.palette.primary.main}`,
  fontSize: '0.77rem',
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
}
