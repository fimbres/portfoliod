import React, { FC } from 'react';

import "./ProgressBar.scss";

interface ProgressBarProps {
    percentage: string;
    fromColor: string;
    toColor: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentage, fromColor, toColor }) => {
    const calculateProgress = 405 - ((405 * Number(percentage)) / 100);

    return (
        <div className='progress-bar'>
            <div className='progress-bar__card'/>
            <div className='progress-bar__progress'>
                <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="129" height="129" rx="64.5" stroke={`url(#paint0_angular_109_${toColor})`} strokeWidth="20" strokeDashoffset={calculateProgress}/>
                    <defs>
                        <radialGradient id={`paint0_angular_109_${toColor}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 74) rotate(90) scale(74.5)">
                            <stop offset="3.4895e-05" stopColor={fromColor}/>
                            <stop offset="1" stopColor={toColor}/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className='progress-bar__percentage'>
                {percentage}%
            </div>
        </div>
    )
}

export default ProgressBar;