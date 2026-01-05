import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer(){
    const theme = useTheme();

    return(
        <Box
            sx={{
                width: 1/2,
                mx: 'auto',
                mt: 2,
                px: 2,
            }}
        >
            {/* Bar */}
                  <Box
                    sx={{
                      height: 60,
                      borderRadius: 3,
                      borderTop:'2px solid rgba(234, 241, 231, 0.80)',
                      boxShadow: '0 6px 12px rgba(136.24, 162.24, 143.60, 0.25)',
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, #E8E9E8 100%)',
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
                        <Box component="a" target="_blank" rel="noopener noreferrer" href="https://github.com/mariamauco" sx={{display: 'flex', cursor: 'pointer', color: `${theme.palette.text.primary}`}}><GitHubIcon/></Box>
                        <Box component="a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mariamauco" sx={{display: 'flex', cursor: 'pointer', color: `${theme.palette.text.primary}`}}><LinkedInIcon/></Box>
                        <Box component="a" href="mailto:mariafmauco@gmail.com" sx={{display: 'flex', cursor: 'pointer', color: `${theme.palette.text.primary}`}}><MailOutlineIcon/></Box>
                    </Box>

                    <Typography
                    sx={{
                        
                        fontSize: '14px',
                        color: `${theme.palette.text.faint}`}}
                    >
                        Last updated: January 4, 2026
                    </Typography>



                  </Box>
        </Box>
    );
}
