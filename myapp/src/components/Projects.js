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


export default function Projects(){
    const theme = useTheme()

        const projects = [
            { id: 1, image: require('../imgs/EcosorterHome.png'), title: 'EcoSorter', description: 'Waste sorting app that detects objects, classifes them, and informs you on the best way to recycle them' },
            { id: 2, image: require('../imgs/RERASSOR.jpg'), title: 'RE-RASSOR', description: 'Modernized FSI\'s RE-RASSOR rover by migrating to a modular, wireless stack using ROS 2 and Raspberry Pi 5. Engineered a React Native interface for dual control of the rover-arm system.' },
            // { id: 3, image: 'project3.jpg', title: 'Project 3', description: 'Description for project 3' },
        ];

        return (
            <Container sx={{  mt:10, width:1/2, position: 'relative', zIndex: 1 }}>
                <Typography variant="h3" sx={{ 
                fontWeight: 400,
                  fontSize: '30px',
                  lineHeight: '48px',
                  color: `${theme.palette.text.primary}`,
                  textAlign: { xs: 'center', md: 'left' },
                  mb:3
                 }}>projects</Typography>
                <Grid container spacing={3} sx={{ mb: 0,  }}>
                    {projects.map((project) => (
                        <Grid item xs={12} sm={12} md={6} key={project.id} >
                            <ProjectCard 
                                image={project.image} 
                                title={project.title} 
                                description={project.description} 
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'right' }}>
                    <Button variant="text" sx={{ textTransform: 'none', fontSize: '1rem' }}>
                        See More
                    </Button>
                </Box>
            </Container>
        );
}