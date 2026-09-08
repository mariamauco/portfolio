import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useTheme } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSecrets } from './util/SecretsProvider';

export default function NavBar({ onMenuSpacerChange }) {
  const [collapse, setCollapse] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuRef = useRef(openMenu);
  const links = ['experiences','projects', 'visitors']
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  // secrets progress
  const { progress } = useSecrets();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // this is because some links make you scroll, others take you to other pages
  const handleNavClick = (label) => {
    if (label === 'visitors' || label === 'fosters') {
      navigate(`/${label}`);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: label } });
      return;
    }
    scrollToSection(label);
  };

  useEffect(() => {
    const updateCollapse = () => {
      setCollapse(window.innerWidth < 700);
    };

    updateCollapse();
    window.addEventListener('resize', updateCollapse);

    return () => window.removeEventListener('resize', updateCollapse);
  }, []);

  const LinkedInIcon = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${theme.palette.primary.secondary}`} class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    )
  }
  const MenuIcon = () => {
    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill={`${theme.palette.primary.secondary}`}  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke={`${theme.palette.primary.secondary}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
  }

  const [isHidden, setIsHidden] = useState(false);
  // Track scroll movement separately from React state so each scroll event uses the latest values.
  const lastScrollY = useRef(0);
  const scrollDistanceRef = useRef(0);
  const isHiddenRef = useRef(false);
  const prevProgressRef = useRef(progress);

  useEffect(() => {
    openMenuRef.current = openMenu;
  }, [openMenu]);

  useEffect(() => {
    if (prevProgressRef.current !== progress) {
      setIsHidden(false);
      isHiddenRef.current = false;
      prevProgressRef.current = progress;
    }
  }, [progress]);

  useEffect(() => {
    // Require a meaningful amount of movement before changing navbar visibility.
    const scrollThreshold = 250;
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // A direction change starts a new scroll measurement, preventing tiny reversals from toggling the navbar.
      if (scrollDelta !== 0 && Math.sign(scrollDelta) !== Math.sign(scrollDistanceRef.current)) {
        scrollDistanceRef.current = 0;
      }

      scrollDistanceRef.current += scrollDelta;

      // Hide the navbar after scrolling down, and close the mobile menu so it cannot remain open off-screen.
      if (scrollDistanceRef.current > scrollThreshold && currentScrollY > 50 && !isHiddenRef.current){
        if (openMenuRef.current)
          setOpenMenu(false);
        isHiddenRef.current = true;
        setIsHidden(true);
      }
      // Show it again only after scrolling up by the same threshold.
      else if(scrollDistanceRef.current < -scrollThreshold && isHiddenRef.current){
        isHiddenRef.current = false;
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }
    // add event listener
    window.addEventListener('scroll', handleScroll, {passive:true})

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const menuSpacerHeight = openMenu && collapse ? 220 : 0;

    onMenuSpacerChange?.(menuSpacerHeight);
  }, [openMenu, collapse, onMenuSpacerChange]);


  return(
    <Box
      sx={{
        // sticky positioning and animation
        position:'fixed',
        top:0,
        left:0,
        right:0,
        zIndex:1000,
        transform: isHidden ? 'translateY(-150%)' : 'translateY(0)', // slides up or shows if scroll
        transition: 'transform 0.3s ease-in-out', // smooth animation

        
        width: '90%',
        maxWidth: '900px',
        mx: 'auto',
        mt: 2,
        px: 2,
      }}
    >
      {/* Progress bar on top of NavBar */}
      <LinearProgress 
        variant="determinate" 
        value={progress === 0 ? 1 : progress}
        sx={{
          maxWidth: '900px',
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
          background: 'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.80) 100%)',
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
              left: 8, // Adjust to align with "Maria"
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
          <Box
            onClick={() => handleNavClick('home-top')}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0, cursor: 'pointer' }}
          >
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

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, ml: 'auto', flexShrink: 0 }}>
            {!collapse ? (
              <>
                {links.map((label) => (
                  <Typography
                    key={label}
                    variant="subtitle1"
                    onClick={() => handleNavClick(label)}
                    sx={{
                      fontWeight: 500,
                      color: '#676b74ff',
                      textTransform: 'lowercase',
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </Typography>
                ))}
                <Box
                  component="a"
                  href="https://github.com/mariamauco"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <SiGithub color={`${theme.palette.primary.secondary}`} />
                </Box>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/mariamauco/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <LinkedInIcon/>
                </Box>
              </>
            ) : (
                <Box
                  onClick={() => setOpenMenu((previous) => !previous)}
                  sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <MenuIcon color={`${theme.palette.primary.secondary}`} />
                </Box>
            )}
          </Box>

          {/* open menu if clicked 
          <Box
            sx={{
              height: 60,
              borderRadius: 3,
              boxShadow: '0 6px 12px rgba(136.24, 162.24, 143.60, 0.25)',
              background: 'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.80) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2.5,
              position: 'relative',
              overflow: 'hidden',
            }}
          ></Box>
      */}
          
        </Box>
      </Box>

      <Box
        sx={{
          display: openMenu && collapse ? 'block' : 'none',
          width: '88%',
          mt: 1.5,
          borderRadius: 3,
          boxShadow: '0 6px 12px rgba(136.24, 162.24, 143.60, 0.25)',
          background: 'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.60) 100%)',
          position: 'absolute',
          top: -5,
          left: 10,
          right: 0,
          overflow: 'hidden',
          p: 2,
        }}
      >
        {/* space for wrap around navbar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt:6.5 }}></Box> 
        
        {/* menu links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', gap: 1 }}>
          {links.map((label, index) => (
            <Box
              key={label}
              onClick={() => {
                setOpenMenu(false);
                handleNavClick(label);
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 1,
                px: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                borderBottom: index !== links.length - 1 ? '1px solid rgba(103, 107, 116, 0.12)' : 'none',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: '#676b74ff',
                  textTransform: 'lowercase',
                  fontSize: '1rem',
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      
    </Box>

    
  )
}
