import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Contact from './Contact';

import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            :3
            <i class='fas fa-heart' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <ScrollLink 
              to='home' 
              className='nav-links' 
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}>
                Home
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='about'
                className='nav-links'
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                About Me
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='projects'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to='contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
          {button && <Button link='#contact' buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
