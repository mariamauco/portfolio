import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    link,
    section,
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const isInternalLink = link.startsWith('#');

    return (
      <>
        {isInternalLink ? (
          <ScrollLink 
            to={link.substring(1)} 
            smooth={true}
            duration={500}
            className='btn-mobile'
          >
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              onClick={onClick}
              type={type}
            >
              {children}
            </button>
          </ScrollLink>
        ) : (
          <Link to={link} className='btn-mobile'>
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              onClick={onClick}
              type={type}
            >
              {children}
            </button>
          </Link>
        )}
      </>
    );
};