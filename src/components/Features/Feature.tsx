import React, { FC } from 'react';
import { BsStarFill } from 'react-icons/bs';

import "./Features.scss";

interface FeatureProps {
    feature: string;
}

const Feature: FC<FeatureProps> = ({ feature }) => {
  return (
    <div className='px-5 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl duration-300'>
        <div className='feature-icon'><BsStarFill/></div>
        <div className='dark:text-white text-center text-lg mt-3'>{feature}</div>
    </div>
  )
}

export default Feature;