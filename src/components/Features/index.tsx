import React, { FC } from 'react';
import Feature from './Feature';

import "./Features.scss";

interface FeaturesProps {
    features: { feature: string }[];
}

const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <div className='bg-neutral-300 dark:bg-neutral-700'>
        <div className='features'>
            <div className='features__title'>Features</div>
            <div className='features__grid'>
                {features.map((featuresItem, index) => <Feature key={index} feature={featuresItem.feature}/>)}
            </div>
        </div>
    </div>
  )
}

export default Features;