import React, { useRef, useState } from 'react'
import { buttonStyle } from './styles'
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Popover,
  TextField,
  IconButton,
} from '@mui/material';
import { ReactTyped } from 'react-typed';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS
import MessageMe from './MessageMe';

export default function Intro(){

  const [modalOpen, setModalOpen] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(false);
  const typedRef = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return(
      // Hi my Name is maria
      
      // profile, desc, and  stack
      <Container maxWidth={false} sx={{ mt: '120px', width: '90%', maxWidth: '940px', mx: 'auto', px: 0, position: 'relative', zIndex: 1 }}>

          {/* Greeting and animated role share a baseline, like the section headings. */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap', columnGap: 1.5, rowGap: 0, mt: 3, mb: 5 }}>
            <Typography variant="h1" sx={{ color: `${theme.palette.text.primary}`, textAlign: { xs: 'center', md: 'left' } }}>
              Hi, I'm <strong>Maria</strong>! I'm 
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            <Typography component="span" variant="h1" sx={{ color: `${theme.palette.text.primary}` }}>
              <ReactTyped
                typedRef={(typed) => { typedRef.current = typed; }}
                strings={['a Software Engineer', 'an AI Developer', 'a Backend Engineer']}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </Typography>
            <IconButton
              aria-label={animationPaused ? 'Resume role animation' : 'Pause role animation'}
              size="small"
              onClick={() => {
                const typed = typedRef.current;
                if (!typed) return;
                if (animationPaused) typed.start();
                else typed.stop();
                setAnimationPaused(!animationPaused);
              }}
              sx={{ color: 'grey.500', p: 0.5 }}
            >
              {animationPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
            </IconButton>
            </Box>
          </Box>
      <Grid container spacing={0} alignItems="center" sx={{  justifyContent:'center', alignItems:'center', gap:6, width: '100%' }}>

            <Grid item xs="auto" sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                  <Box
                    sx={{
                      width: '300px',
                      height: '300px',
                      backgroundColor: '#FFFFFF',
                      border: `2px solid ${theme.palette.secondary.main}`,
                      p: 1/2,
                      borderRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden', // Ensure the image doesn't overflow the box
                    }}
                  >
                    {/* Placeholder for image */}
                    <img
                      src={require('../imgs/profile.jpg')}
                      alt={'Professional photo of me :)'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Ensure the image covers the box without distortion
                        borderRadius: '20px', // Match the border radius of the box
                      }}
                    />
                  </Box>
                </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>

          {/* /* About me */ }
                        <Typography
                          variant="h5"
                          sx={{
                              color: `${theme.palette.text.primary}`,
                              textAlign: { xs: 'center', md: 'justify'},
                          }}
                          >I specialize in building seamless AI and automation solutions. Simply, I spend too much time in front of a screen solving problems so that you and your systems don't have to.</Typography>

                        {/* Buttons */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            lineHeight: '23px',
                            marginTop: '20px',
                            color: `${theme.palette.text.primary}`,
                          }}>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="outlined" 
                            sx={{ ...buttonStyle, width: '50%' }}
                            onClick={() => scrollToSection('experiences')}>
                              Experiences
                            </Button>
                            <Button variant="outlined" sx={{ ...buttonStyle, width: '50%' }}
                            onClick={() => scrollToSection('projects')}>
                              Explore Projects
                            </Button>
                          </Box>
                          <Button variant="outlined" onClick={() => setModalOpen(true)}
                            sx={{ ...buttonStyle, width: '100%' }}>
                            Contact Me
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
      {/* <Button
        variant="outlined"
        onClick={() => setModalOpen(true)}
        sx={{ ...buttonStyle, width: '100%', mt:3 }}
      >
        Contact Me
      </Button> */}

      <MessageMe open={modalOpen} onClose={() => setModalOpen(false)} />

    </Container>
  )
}
