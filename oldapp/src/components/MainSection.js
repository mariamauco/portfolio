import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import { ReactTyped } from 'react-typed';


function MainSection() {
    return(
        <div id='home' className='main-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Maria Mauco</h1>
            <div className ='occupation'>
            <ReactTyped
                strings={['Software Engineer', 'AI Developer']}
                typeSpeed={100}
                backSpeed={100}
                loop
                />
            </div>
        </div>
    );
}
export default MainSection;