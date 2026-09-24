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

export const theme = createTheme({
  // In your theme setup
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    h3: {
        fontFamily: 'Space Grotesk, sans-serif',
    },
    code: {
        fontFamily: 'Fira Code, monospace',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#a9eb8b',
      secondary: '#84c763'
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