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
import {ExperienceCard, ProjectCard} from './Cards';

export default function Experiences(){

    const theme = useTheme();

     const experiences = [
            { id: 1, image: require('../imgs/servicenow.jpg'), company:'ServiceNow', title:'AI Technical Architect Intern', location:'Orlando',dates:'Summer 2026', description: 'I built practical, enterprise-ready AI tools and agentic workflows to solve real problems. Prepared demos for customers on agentic solutions to drive AI adoption', tags:['ServiceNow Platform', 'Javascript', 'Python', 'System Administration', 'NowLLM & Agents', 'AI Architecture', 'Automation']},
            { id: 2, image: require('../imgs/weecs.jpg'), company:'Women in Electrical Engineering and Computer Science', title: 'Treasurer', location:'Orlando', dates:'Fall 2024-Present', description: 'As Treasurer and former Softwre Lead, I\'ve moved from managing development teams to mentoring our current tech leads and driving fundraising efforts to elevate our impact at UCF and prep members for tech careers.', tags:['Leadership', 'Team and Project Management', 'SDLC', 'Dev-Ops', 'Web and Backend Development', 'Machine Learning'] },
            { id: 3, image: require('../imgs/Minoria.png'), company:'Minoria Tech LLC', title: 'Backend Lead', location:'Orlando', dates:'Spring 2026', description: 'I architected and built the core backend systems and APIs for a CRM automation platform. Guided our system design choices and worked closely with teams to ensure we delivered quality software.', tags:['Leadership', 'Backend Development', 'SDLC', 'Dev-Ops', 'PostGres', 'API Development', 'Automation'] },
            { id: 4, image: require('../imgs/SARC.png'), company:'Student Academic Success Center', title: 'Computer Science 1 Tutor', location:'Orlando', dates:'Summer 2025 - Fall 2025', description: 'I became a confident public speaker here as I supported all Computer Science 1 students by leading group and individual tutoring sessions. I helped students imporve their grades and grow their confidence in coding in C.', tags:['Tutoring', 'Computer Science', 'Mentorship', 'C', 'Academic Materials', 'Leadership', 'Administration'] },
            { id: 5, image: require('../imgs/TA.png'), company:'University of Central Florida', title: 'Teaching Assistant', location:'Orlando', dates:'Summer 2024 - Spring 2025', description: 'I guided students through discrete structures under Prof. Guha, leading labs and supporting grading for hundreds of assignments.', tags:['Teaching', 'Discrete Strucutures', 'Teaching', 'Academic Support', 'Leadership', 'Lesson Planning', 'Grading'] },
            { id: 6, image: require('../imgs/accenture.png'), company:'Accenture', title: 'Work Prep Participant', location:'Remote', dates:'Summer 2024', description: 'As a Work Prep Participant at Accenture through Girls Who Code, I connected with a vibrant community of women in technology. Learned from experienced professionals about careers in consulting and technology while working on innovative Web3/Blockchain projects.', tags:['Consulting', 'Web3/Blockchain', 'Project Management', 'Problem Solving', 'Heath-care', 'Public Speaking'] },
        ];


    return (
        <Container id="experiences" sx={{  mt:10, width:'900px', position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ 
                fontWeight: 400,
                
                fontSize: '30px',
                lineHeight: '48px',
                color: `${theme.palette.text.primary}`,
                textAlign: { xs: 'center', md: 'left' },
                mb:3
                }}>experience</Typography>

            {/* <Box sx={{background:'#ebebeb62',borderRadius:2,border: "1px solid #bababaff", justifyItems:'center', justifyContent:'center', p:3}}>
                <Typography variant="h3" sx={{ 
                  fontFamily:'Fira Code, monospace',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '48px',
                    color: `${theme.palette.text.primary}`,
                    textAlign: { xs: 'center', md: 'center' },
                }}>in progress..</Typography>
            </Box>                 */}

            <Grid constainer spacing={3} sx={{}}>
                {experiences.map((experience) =>(
                    <Grid item key={experience.id} sx={{mb:3}}>
                        <ExperienceCard
                        image={experience.image}
                        title={experience.title}
                        company={experience.company}
                        location={experience.location}
                        dates={experience.dates}
                        description={experience.description}
                        tags={experience.tags}
                        />
                    </Grid>
                ))}

            </Grid>
    
        </Container>
    )
}