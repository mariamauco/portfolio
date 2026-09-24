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
            { id: 2, image: require('../imgs/outline.png'), title: 'Outline Open Source Contributor', description: 'Actively developing enhancements for Outline, an open-source team knowledge base platform. Focusing on resolving community-flagged issues, and implementing high-impact features.', active: 1, link: null, github: null },
            { id: 1, image: require('../imgs/Graphify.png'), title: 'Database to Graph Knowledge Agent', description: 'Architecting a system to support an AI agent that creates accurate database queries or answers using a knowledge graph, which is converted from a database schema, thus reducing token consumption and hallucinations.', active: 1, link: null, github: null },
            { id: 3, image: require('../imgs/weecsweb.png'), title: 'WEECS Full-Stack Overhaul', description: 'Redesigning WEECS\'s UI and backend to expand its platform. Creating workflows to automate user memberships, merch orders, and sponsor relationship management.', active: 1, link: 'https://women.eecs.ucf.edu/', github: 'https://github.com/mariamauco/weecs-website' },
            
            { id: 4, image: require('../imgs/digitalwardrobe.jpg'), title: 'Fitly', description: 'I guided a team to build a digital wardrobe app that generates personalized, weather-conscious outfit recommendations. This project sparked a passion for dev-ops and homelabbing.', active: 0, link: 'https://fitly.jewellbase.com/landing', github:'https://github.com/mariamauco/Spr26DigitalWardrobe'},
            { id: 5, image: require('../imgs/EcosorterHome.png'), title: 'EcoSorter', description: 'Waste sorting app that detects objects, classifes them, and informs you on the best way to recycle them.', active: 0, link: 'https://ecosorter.jewellbase.com/', github:'https://github.com/mariamauco/Fall2025WEECSLarge'},
            { id: 6, image: require('../imgs/RERASSOR.jpg'), title: 'RE-RASSOR', description: 'Led my Senior Design team to build an autonomous rover-arm coordination system. It was a great to get hands-on embedded engineering experience and support Florida Space Institute\'s mission.', active: 0, link: null, github: null },
            // { id: 3, image: 'project3.jpg', title: 'Project 3', description: 'Description for project 3', link: '', github:'' },
        ];

        return (
            <Container id="projects" maxWidth={false}
                    sx={{ mt: 10, width: '100%', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
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
                                active={project.active}
                                link={project.link}
                                github={project.github}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'right' }}>
                    <Button variant="text"  sx={{ textTransform: 'none', fontSize: '1rem' }}>
                        See More
                    </Button>
                </Box>
            </Container>
        );
}