import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useTheme } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSecrets } from './util/SecretsProvider';
import {LinkedInIcon, MenuIcon} from './styles'

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

        
        width: '100%',
        maxWidth: '940px',
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
          maxWidth: '940px',
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
          justifyContent:'space-between',
          gap: 1,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          }}
        >
          {/* Name */}
          <Box component="ul" sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0, listStyle: 'none', p: 0, m: 0 }}>
            <Box component="li">
              <Box component="a" href="/" onClick={(event) => { event.preventDefault(); handleNavClick('home-top'); }} sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
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
            </Box>
          </Box>

          <Box component="ul" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, ml: 'auto', flexShrink: 0, listStyle: 'none', p: 0, m: 0 }}>
            {!collapse ? (
              <>
                {links.map((label) => (
                  <Box component="li" key={label}>
                    <Typography component="a" href={label === 'visitors' ? '/visitors' : `/#${label}`} variant="h5" onClick={(event) => { event.preventDefault(); handleNavClick(label); }} sx={{ color: '#676b74ff', textTransform: 'lowercase', cursor: 'pointer', textDecoration: 'none' }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
                <Box component="li"><Box component="a" aria-label="GitHub" href="https://github.com/mariamauco" target="_blank" rel="noreferrer" sx={{ display: 'inline-flex', alignItems: 'center' }}><SiGithub color={`${theme.palette.primary.secondary}`} /></Box></Box>
                <Box component="li"><Box component="a" aria-label="LinkedIn" href="https://www.linkedin.com/in/mariamauco/" target="_blank" rel="noreferrer" sx={{ display: 'inline-flex', alignItems: 'center' }}><LinkedInIcon/></Box></Box>
              </>
            ) : (
                <Box component="li"><Typography component="a" href="#menu" aria-label={openMenu ? 'Close menu' : 'Open menu'} aria-expanded={openMenu} onClick={(event) => { event.preventDefault(); setOpenMenu((previous) => !previous); }} sx={{ display: 'inline-flex', alignItems: 'center', color: 'primary.secondary', cursor: 'pointer' }}><MenuIcon color={`${theme.palette.primary.secondary}`} /></Typography></Box>
            )}
          </Box>
          
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
        <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', gap: 1, listStyle: 'none', p: 0, m: 0 }}>
          {links.map((label, index) => (
            <Box component="li" key={label} sx={{ py: 1, px: 1.5, borderRadius: 2, borderBottom: index !== links.length - 1 ? '1px solid rgba(103, 107, 116, 0.12)' : 'none' }}>
              <Typography component="a" href={label === 'visitors' ? '/visitors' : `/#${label}`} variant="h5" onClick={(event) => { event.preventDefault(); setOpenMenu(false); handleNavClick(label); }} sx={{ color: '#676b74ff', textTransform: 'lowercase', textDecoration: 'none' }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      
    </Box>

    
  )
}
