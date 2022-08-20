import React, { FC } from 'react';

import "./Technologies.scss";

interface TechnologiesProps {
    technologies: {
        percentage : string;
        technology : string;
        color : string;
    }[]
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className='bg-zinc-100 dark:bg-neutral-600'>
        <div className='technologies'>
            <div className='technologies__title'>Technologies</div>
            <div className='technologies__container'>
                {technologies.map((technology, index) => <div key={index}>{technology.color}</div>)}
            </div>
        </div>
    </div>
  )
}

export default Technologies;