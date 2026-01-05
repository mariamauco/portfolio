import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import { Typed } from 'react-typed';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
