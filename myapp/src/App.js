import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
//import './App.css';
import { Typed } from 'react-typed';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/styles'
import Visitors from './components/pages/Visitors';
import Fosters from './components/pages/Fosters';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/visitors' exact element={<Visitors/>}/>
        <Route path='/fosters' exact element={<Fosters/>}/>
      </Routes>
    </Router>
      
    </>
    </ThemeProvider>
  );
}

export default App;
