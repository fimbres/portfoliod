import React, { FC } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <div className='footer'>
      <div className='footer__text normal'>This portfolio was developed using Sass, Tailwind and Gatsby with TypeScript.</div>
      <div className='footer__inner'>
        <div className='footer__text'>© {new Date().getFullYear()}, All Rights Reserved Fimbres Technologies</div>
        <div className='footer__links'>
          <a href="https://github.com/fimbres" rel="noreferrer" target="_blank"><FaGithubSquare size={35} /></a>
          <a href="https://www.linkedin.com/in/fimbres-isaac/" rel="noreferrer" target="_blank"><FaLinkedin size={35} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;