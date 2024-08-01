import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Contact.css';

function Contact(){

    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    useEffect(() => {
        showButton();
      }, []);
    
    return(
        <div id='contact' className='contact-container'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
                <hr/>
            </div>
            <div className='section1'>
                <h3>Reach out to me today to discuss how I can help take your brand to the next level.</h3>
            </div>
            <div className='section2'>
                <form className='contact-form'>
                    <div className='row'>
                        <div className='form-item'>
                            <input 
                            className='form-element' 
                            id='name' name='name'
                            placeholder='Name'
                            type='text'
                            required></input>
                        </div>
                        <div className='form-item'>
                            <input 
                            className='form-element' 
                            id='email' name='email'
                            placeholder='Email'
                            type='text'
                            required></input>
                        </div>
                    </div>
                    <div className='form-item'>
                            <input 
                            className='form-element msgbox' 
                            id='message' name='message'
                            placeholder='Message'
                            type='text'
                            required></input>
                    </div>

                    <div className='row send'>
                        <button 
                        className='btn-contact'
                        type='submit'>
                            Send
                        </button>
                    </div>

                </form>
            </div>

            <div className='section3'>
                <div btn>{button && <Button link='mailto:mariafmauco@gmail.com' buttonStyle='btn--outline'>Email</Button>}</div>
                <div btn>{button && <Button link='https://www.linkedin.com/in/mariamauco/' buttonStyle='btn--outline'>LinkedIn</Button>}</div>
                <div btn>{button && <Button link='https://github.com/mariamauco' buttonStyle='btn--outline'>GitHub</Button>}</div>

            </div>

        </div>
    );
}

export default Contact;