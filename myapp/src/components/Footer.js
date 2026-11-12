import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer(){
    const theme = useTheme();

    return(
        <Box
            sx={{
                width: '100%', maxWidth: '940px',
                mx: 'auto',
                mt: 'auto',
                mb: 2,
                px: 2,
            }}
        >
            {/* Bar */}
                  <Box
                    sx={{
                      height: 60,
                      borderRadius: 3,
                      boxShadow: '0 6px 12px rgba(136.24, 162.24, 143.60, 0.25)',
                      background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.8) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 2.5,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center'
                    }}>
                        <Box component="a" target="_blank" rel="noopener noreferrer" href="https://github.com/mariamauco" sx={{display: 'flex', cursor: 'pointer', color: 'primary.secondary'}}><GitHubIcon/></Box>
                        <Box component="a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mariamauco" sx={{display: 'flex', cursor: 'pointer', color: 'primary.secondary'}}><LinkedInIcon/></Box>
                        <Box component="a" href="mailto:mariafmauco@gmail.com" sx={{display: 'flex', cursor: 'pointer', color: 'primary.secondary'}}><MailOutlineIcon/></Box>
                    </Box>

                    <Typography variant="caption" sx={{ color: '#676b74ff' }}>
                        Last updated: November 12, 2026
                    </Typography>



                  </Box>
        </Box>
    );
}
