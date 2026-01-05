import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

export default function NavBar(){
  const links = ['projects', 'visitors', 'contact']
  const [progress, setProgress] = React.useState(1)


  return(
    
    <Box
      sx={{
        width: 1/2,
        mx: 'auto',
        mt: 2,
        px: 2,
      }}
    >
      {/* Progress bar on top of NavBar */}
      <LinearProgress 
        variant="determinate" 
        value={progress}
        sx={{
          height: 4,
          borderRadius: 2,
          mb: 1,
          backgroundColor: 'rgba(196.11, 208.82, 199.71, 0.15)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 2,
            backgroundColor: '#23d160',
            backgroundImage: 'linear-gradient(90deg, #23d160 0%, #2fd171 100%)',
          }
        }}
      />
      {/* Bar */}
      <Box
        sx={{
          height: 60,
          borderRadius: 3,
          boxShadow: '0 6px 12px rgba(136.24, 162.24, 143.60, 0.25)',
          background: 'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.80) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* box where we are */}
        <Box
          sx={{
            width: '130px',
            height: '60%',
            borderRadius: 100,
            position: 'absolute',
            left: 8, // Adjust to align with "Maria M"
            top: '50%',
            transform: 'translateY(-50%)',
            border: '2px rgba(196.11, 208.82, 199.71, 0.25) solid',
            background: 'linear-gradient(180deg, rgba(157, 213, 111, 0.05) 0.96%, rgba(255, 255, 255, 0.03) 6.73%, rgba(140, 190, 99, 0.05) 96.63%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
            zIndex: 0,
            }}/>
        {/* Wording inside bar */}
        <Box
          sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          }}
        >
          {/* Name */}
          <Box sx={{flex: '0 0 60%', display: 'flex', alignItems: 'center', gap: 1}}>
            <img src={require('../imgs/my-notion-face-transparent.png')}
                 style={{
                   width: '40px',
                   height: '40px',
                   borderRadius: '50%',
                   flexShrink: 0,
                 }}/>
            <Typography   
              variant="subtitle1" 
              sx={{
                fontWeight: 580,
                color: '#435068ff',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              MARIA
            </Typography>
          </Box>

          {/* Other links */}
            <Box sx={{ display: 'flex', gap: 3, flex: '0 0 40%' }}>
            {links.map((label) => (
              <Typography
              key={label}
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                color: '#676b74ff',
                textTransform: 'lowercase',
                fontSize: { xs: '0.75rem', sm: '1rem' },
              }}
              >
              {label}
              </Typography>
            ))}
            </Box>
          </Box>

          {/* Right spacer to keep central balance if more items added later */}
        <Box sx={{ width: 24 }} />

      </Box>
      
    </Box>
  )
}
