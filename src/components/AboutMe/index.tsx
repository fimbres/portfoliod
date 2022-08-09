import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import "./AboutMe.scss";

export const AboutMe = () => {
  return (
    <div className='bg-zinc-300 dark:bg-neutral-700'>
        <div className='about-me'>
            <StaticImage src='../../assets/images/profile.png' alt="Isaac Fimbres" placeholder="tracedSVG" className='about-me__image'/>
            <div className='about-me__info-container'>
                <div className='about-me__info-container__title'>About Me</div>
                <div className='about-me__info-container__text'>I'm an enthusiastic software engineer with experience with both web and mobile development.</div>
                <div className='about-me__info-container__text'>I'm passionate about what I do and am always looking to learn new emerging technologies, programming languages, as well as ways to improve my day-to-day skills as a software developer.</div>
                <div className='about-me__info-container__text'>I enjoy being involved in any aspect of a software project, from UI/UX design to database development. However, lately I've been working more on the front-end side.</div>
                <div className='about-me__button-container'>
                    <button className='button button--primary'>Contact Me</button>
                    <button className='button button--secondary'>See My Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}
