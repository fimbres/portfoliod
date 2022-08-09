import React, { FC, ReactElement } from 'react';

import "./Skill.scss";

interface SkillProps {
    icon: ReactElement;
    text: string;
}

export const Skill: FC<SkillProps> = ({ icon, text }) => {
  return (
    <div className='skill'>
        <div className='skill__icon'>{icon}</div>
        <div className='skill__text'>{text}</div>
    </div>
  )
}
