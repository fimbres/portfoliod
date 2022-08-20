import React, { FC } from 'react';
import { FaReact, FaPython, FaUser, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiDotnet, SiMongodb, SiGatsby } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { GrMysql } from 'react-icons/gr';

import "./Skills.scss";
import { Skill } from './Skill';

export const Skills: FC = () => {
    const skills = [
        {
            icon: <FaReact size={60}/>,
            text: "React/React Native"
        },
        {
            icon: <SiTypescript size={60}/>,
            text: "TypeScript"
        },
        {
            icon: <SiGatsby size={60}/>,
            text: "Gatsby"
        },
        {
            icon: <FaGitAlt size={60}/>,
            text: "Git"
        },
        {
            icon: <FaUser size={60}/>,
            text: "UX/UI Design"
        },
        {
            icon: <FaPython size={60}/>,
            text: "Python"
        },
        {
            icon: <SiDotnet size={60}/>,
            text: ".NET Framework"
        },
        {
            icon: <MdDesignServices size={60}/>,
            text: "Graphic Design"
        },
        {
            icon: <SiExpress size={60}/>,
            text: "ExpressJs"
        },
        {
            icon: <FaNodeJs size={60}/>,
            text: "NodeJs"
        },
        {
            icon: <SiMongodb size={60}/>,
            text: "MongoDB"
        },
        {
            icon: <GrMysql size={60}/>,
            text: "MySQL"
        },
    ];

  return (
    <div className='bg-neutral-200 dark:bg-neutral-600'>
        <div className='skills'>
            <div className='skills__title'>My Skills</div>
            <div className='skills__text'>These are some of the skills, technologies and programming languages I use the most.</div>
            <div className='skills__grid'>
                {skills.map((skill,index) => <Skill key={index} icon={skill.icon} text={skill.text}/>)}
            </div>
        </div>
    </div>
  )
}
