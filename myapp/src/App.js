import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Home from './components/pages/Home';
import { SecretsProvider } from './components/util/SecretsProvider';
import { theme } from './components/styles';
import NavBar from './components/NavBar';
import Visitors from './components/pages/Visitors';
import Fosters from './components/pages/Fosters';

function App() {
  const [menuSpacerHeight, setMenuSpacerHeight] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <SecretsProvider>
        
        <Router>
          <Box
                sx={{
                  width: '100%',
                  minHeight: '100vh',
                  background: 'linear-gradient(180deg, rgba(237, 255, 226, 0.40) 0.87%, rgba(255, 255, 255, 0.00) 21.96%, rgba(255, 255, 255, 0.80) 68.9%), linear-gradient(270deg, #EDFFE2 0.06%, rgba(237, 222, 255, 0.60) 11.31%, rgba(255, 227, 245, 0.30) 24.75%, #FFF 50.03%, rgba(255, 227, 245, 0.30) 73.82%, rgba(237, 222, 255, 0.60) 84.08%, #EDFFE2 99.99%), #FFF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
          {/* NAVIGATION BAR */}
          <NavBar onMenuSpacerChange={setMenuSpacerHeight} />
          <Box sx={{ height: menuSpacerHeight, width: '100%', flexShrink: 0 }} />

          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/visitors' exact element={<Visitors/>}/>
            <Route path='/fosters' exact element={<Fosters/>}/>
          </Routes>
          </Box>
        </Router>
          
        
      </SecretsProvider>
    </ThemeProvider>
  );
}

export default App;
