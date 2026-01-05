import React from 'react'
import { buttonStyle } from './styles'
import {    
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from '@mui/material'
import { ReactTyped } from 'react-typed';
import { useTheme } from '@mui/material/styles';
import {ProjectCard} from './Cards';

export default function Experiences(){

    const theme = useTheme();

    return (
        <Container sx={{  mt:10, width:1/2, position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ 
                fontWeight: 400,
                
                fontSize: '30px',
                lineHeight: '48px',
                color: `${theme.palette.text.primary}`,
                textAlign: { xs: 'center', md: 'left' },
                mb:3
                }}>experience</Typography>

            <Box sx={{background:'#ebebeb62',borderRadius:2,border: "1px solid #bababaff", justifyItems:'center', justifyContent:'center', p:3}}>
                <Typography variant="h3" sx={{ 
                  fontFamily:'Fira Code, monospace',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '48px',
                    color: `${theme.palette.text.primary}`,
                    textAlign: { xs: 'center', md: 'center' },
                }}>in progress..</Typography>
            </Box>                
    
        </Container>
    )
}