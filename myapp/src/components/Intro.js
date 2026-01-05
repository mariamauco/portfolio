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

export default function Intro(){
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null); // State to control popover visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hey Maria! I want to discuss...',
  }); // State to store form data
  const handleOpen = (event) => {
    if (!anchorEl) setAnchorEl(event.currentTarget); // Open popover only if it's not already open
  };
  const handleClose = () => setAnchorEl(null); // Close popover
  const open = Boolean(anchorEl); // Check if popover is open= () => setOpen(false); // close modal

    // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSend = () => {
    const serviceID = 'service_uatiob5';
    const templateID = 'template_rifirai';
    const publicKey = 'RWUVL4-2mBqWPUpPU';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        handleClose(); // close the popover
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  function Modal(){
    return(
  <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
        <Typography sx={{fontWeight:600, fontSize:'18px'}}>Send a message</Typography>
        <Typography sx={{fontSize:'14px', textAlign: { xs: 'center', md: 'justify' },}}>Whether you want to collaborate on a project, need help solving a problem, or want to talk tech, reach out by sending a message. Let's take your ideas to the next level!</Typography>
        <TextField  
          size='small' 
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}  
          variant="outlined" 
          fullWidth />
        <TextField
          size="small"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          defaultValue="Hey Maria! I want to discuss..."
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
      <Button onClick={handleClose} color="secondary">
        Cancel
      </Button>
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
        </Box>
      </Box>
    </Popover>
    )
  }

  return(
      // Hi my Name is maria
      
      // profile, desc, and  stack
      <Container sx={{  mt:5, width:1/2, position: 'relative', zIndex: 1 }}>
          {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontSize: '40px',
                lineHeight: '48px',
                color: `${theme.palette.text.primary}`,
                textAlign: { xs: 'center', md: 'left' },
                mt:3
              }}
            >
              Hi, I'm <strong>Maria</strong>!
            </Typography>
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: '400px' }}>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                      mr: 5,
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

          {/* /* About me */ }
                        <Typography
                          variant="h3"
                          sx={{
                              fontWeight: 400,
                              fontSize: '18px',
                              lineHeight: '23px',
                              color: `${theme.palette.text.primary}`,
                              textAlign: { xs: 'center', md: 'justify' },
                          }}
                          >I specialize in building seamless AI and automation solutions. Basically, I rack up a high screen time solving puzzles so that you and your systems don't have to.</Typography>

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
                          <Button variant="outlined" onClick={handleOpen} sx={{ ...buttonStyle, width: '100%' }}>
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
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <ReactTyped
          strings={['Software Engineer', 'AI Developer', 'Embedded Engineer']}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Typography>

      {/* Modal */}
      <Box sx={{}}>
        <Modal/>
      </Box>
      
      
    </Container>
  )
}