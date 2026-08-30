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
          
          {/* NAVIGATION BAR */}
          <NavBar onMenuSpacerChange={setMenuSpacerHeight} />
          <Box sx={{ height: menuSpacerHeight, width: '100%', flexShrink: 0 }} />

          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/visitors' exact element={<Visitors/>}/>
            <Route path='/fosters' exact element={<Fosters/>}/>
          </Routes>
        </Router>
          
        
      </SecretsProvider>
    </ThemeProvider>
  );
}

export default App;
