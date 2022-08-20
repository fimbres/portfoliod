import React, { FC } from 'react';

import "./Description.scss";

interface DescriptionProps {
    description: string;
}

export const Description: FC<DescriptionProps> = ({ description }) => {

  return (
    <div className='bg-zinc-50 dark:bg-neutral-600'>
        <div className='description'>
            <div className='description__title'>What Is This Project About?</div>
            <div className='description__text'>{description}</div>
        </div>
    </div>
  )
}
