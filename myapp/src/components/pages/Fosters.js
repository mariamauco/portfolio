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
import { useTheme } from '@emotion/react';


export default function Fosters() {

    const theme = useTheme();

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
            <Box sx={{background:'#ebebeb62',borderRadius:2,border: "1px solid #bababaff", justifyItems:'center', justifyContent:'center', p:3, mt:'150px'}}>
                <Typography variant="h3" sx={{ 
                    fontFamily:'Fira Code, monospace',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '48px',
                    color: `${theme.palette.text.primary}`,
                    textAlign: { xs: 'center', md: 'center' },
                }}>in progress..</Typography>
            </Box>                

        {/* FOOTER */}
        <Footer/>

        </Box>
    )
}