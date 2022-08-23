import React, { FC } from 'react';
import ProgressBar from './ProgressBar';

import "./Technologies.scss";

interface TechnologiesProps {
    technologies: {
        percentage: string;
        technology: string;
        fromColor: string;
        toColor: string;
    }[]
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className='bg-white dark:bg-neutral-600'>
        <div className='technologies'>
            <div className='technologies__title'>Technologies</div>
            <div className='technologies__container'>
                {technologies.map((technology, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <ProgressBar percentage={technology.percentage} fromColor={technology.fromColor} toColor={technology.toColor}/>
                            <div className='mt-5 dark:text-white text-lg font-medium text-center w-52 mx-auto break-words'>{technology.technology}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Technologies;