import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(){
    return(
        <div id='projects' className='cards'>
            <h1>My Projects</h1>
            <hr/>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/sc.png'
                        text= 'My Portfolio (This website)'
                        label= 'React, NodeJS, HTML, CSS'
                        path= '/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default Cards;