import React, { useState } from 'react'
import { buttonStyle } from './styles'
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Popover,
  TextField,
} from '@mui/material';
import { ReactTyped } from 'react-typed';
import { useTheme } from '@mui/material/styles';
import emailjs from 'emailjs-com'; // Import EmailJS
import MessageMe from './MessageMe';

export default function Intro(){

  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme()
  return(
      // Hi my Name is maria
      
      // profile, desc, and  stack
      <Container sx={{  mt:'120px', width: '90%', maxWidth: '980px', position: 'relative', zIndex: 1}}>

        <Box sx={{}}>

          {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontSize: '40px',
                lineHeight: '48px',
                color: `${theme.palette.text.primary}`,
                textAlign: { xs: 'center', md: 'left' },
                mt:3, ml:5, mb:5
              }}
            >
              Hi, I'm <strong>Maria</strong>!
            </Typography>
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
                          variant="h3"
                          sx={{
                              fontWeight: 400,
                              fontSize: '18px',
                              lineHeight: '23px',
                              color: `${theme.palette.text.primary}`,
                              textAlign: { xs: 'center', md: 'justify'},
                          }}
                          >I specialize in building seamless AI and automation solutions. Simply, I spend too much time infront of a screen solvig problems so that you and your systems don't have to.</Typography>

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
                            <Button variant="outlined" sx={{ ...buttonStyle, width: '50%' }}>
                              Experiences
                            </Button>
                            <Button variant="outlined" sx={{ ...buttonStyle, width: '50%' }}>
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
                  {/* Subtitle */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          fontSize: '40px',
          lineHeight: '48px',
          color: `${theme.palette.text.primary}`,
          textAlign: { xs: 'center', md: 'left' }, ml:5, mt:5
        }}
      >
        <ReactTyped
          strings={['Software Engineer', 'AI Developer', 'Embedded Engineer']}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Typography>
      
      {/* <Button
        variant="outlined"
        onClick={() => setModalOpen(true)}
        sx={{ ...buttonStyle, width: '100%', mt:3 }}
      >
        Contact Me
      </Button> */}

      <MessageMe open={modalOpen} onClose={() => setModalOpen(false)} />

        </Box>
    </Container>
  )
}