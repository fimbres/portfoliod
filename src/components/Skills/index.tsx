import React, { FC } from 'react';
import { FaReact, FaPython, FaUser, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAwsamplify, SiMongodb, SiGatsby, SiGraphql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import "./Skills.scss";
import { Skill } from './Skill';

export const Skills: FC = () => {
    const skills = [
        {
            icon: <FaReact size={60}/>,
            text: "React Native"
        },
        {
            icon: <TbBrandNextjs size={60}/>,
            text: "NextJs"
        },
        {
            icon: <SiGatsby size={60}/>,
            text: "GatsbyJs"
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
            icon: <SiTypescript size={60}/>,
            text: "TypeScript"
        },
        {
            icon: <SiGraphql size={60}/>,
            text: "GraphQL"
        },
        {
            icon: <FaGitAlt size={60}/>,
            text: "Git"
        },
        {
            icon: <FaNodeJs size={60}/>,
            text: "NodeJs"
        },
        {
            icon: <SiAwsamplify size={60}/>,
            text: "AWS Services"
        },
        {
            icon: <SiMongodb size={60}/>,
            text: "MongoDB"
        },
        {
            icon: <SiPostgresql size={60}/>,
            text: "PostgreSQL"
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
