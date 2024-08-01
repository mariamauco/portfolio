import React from 'react';
import './About.css';

function About(){
    return(
        <div id='about' className='about-container'>
            <h1>About Me</h1>
            <hr/>
            <div className='about-card'>
                <h2>About Me</h2>
                <p>I am a third-year student at the University of Central Florida with an interest for AI. My fascination began with simple coding projects, but it quickly evolved into a profound passion for solving complex problems and building innovative solutions. My knowledge includes Python, Java, Machine Learning, C, and others. I thrive on challenges and continuously seek new ways to apply my skills, always eager to learn and implement new technologies to contribute to future projects.</p>
                </div>
            <div className='about-card'>
                <h2>Experience</h2>
                <table>
                    <tbody className='experiencetable'>
                        <tr>
                            <th>Headstarter AI Fellow</th>
                            <td>Headstarter</td>
                            <td>June 2024 - Preseent</td>
                        </tr>
                        <tr>
                            <th>Computer Science Teaching Assistant</th>
                            <td>UCF Summer Institute</td>
                            <td>June 2024</td>
                        </tr>
                        <tr>
                            <th>Work Prep Participant</th>
                            <td>Accenture & Girls Who Code</td>
                            <td>May 2024</td>
                        </tr>
                        <tr>
                            <th>Ecommerce Assistant</th>
                            <td>Friends That Lilly</td>
                            <td>July 2021 - Nov 2021</td>
                        </tr>
                    </tbody>
                </table>
                

            </div>
            <div className='about-card'>
                <h2>Education and Skills</h2>
                <div className='about-small-card edu'>
                    <h3>Bachelor of Computer Science</h3>
                    <p className='minor'>Minor in Intelligent Robotic Systems</p>
                    <p>University of Central Florida</p>
                    <p>2022-2026</p>
                </div>
                <div className='about-small-card skill'>
                    <h3>Skills</h3>
                    <p>Languages: Python, Java, C, Javascript</p>
                    <p>Technologies and Toops: React, NodeJS, Git</p>
                </div>
            </div>
        </div>
    );
}

export default About;