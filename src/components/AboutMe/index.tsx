import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import CVIngles from '../../assets/pdf/IsaacFimbres_Resume.pdf';
import "./AboutMe.scss";
import ModalContext from '../../context/ModalContext';

export const AboutMe: FC = () => {
  const Download = () => {
    window.open(CVIngles);
  };

  return (
    <ModalContext.Consumer>
      {ModalContext => (
        <div className='bg-white dark:bg-neutral-700'>
            <div className='about-me'>
                <StaticImage src='../../assets/images/profile.png' alt="Isaac Fimbres" placeholder="blurred" className='about-me__image'/>
                <div className='about-me__info-container'>
                    <div className='about-me__info-container__title'>About Me</div>
                    <div className='about-me__info-container__text'>I'm an enthusiastic software engineer with experience with both web and mobile development.</div>
                    <div className='about-me__info-container__text'>I'm passionate about what I do and am always looking to learn new emerging technologies, programming languages, as well as ways to improve my day-to-day skills as a software developer.</div>
                    <div className='about-me__info-container__text'>I enjoy being involved in any aspect of a software project, from UI/UX design to database development. However, lately I've been working more on the front-end side.</div>
                    <div className='about-me__button-container'>
                        <button className='button button--primary' onClick={ModalContext.handleContact}>Contact Me</button>
                        <button className='button button--secondary' onClick={Download}>See My Resume</button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </ModalContext.Consumer>
  )
}
