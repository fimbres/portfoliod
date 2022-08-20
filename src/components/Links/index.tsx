import React, { FC } from 'react';
import { FaGithubSquare, FaEye } from 'react-icons/fa';

import "./Links.scss";

interface LinksProps {
    codeUrl?: string;
    demoUrl?: string;
}

const Links: FC<LinksProps> = ({ codeUrl, demoUrl }) => {
  return (
    <div className='md:py-16 bg-neutral-200 dark:bg-zinc-800'>
        <div className='links'>
            <div className='text-center text-2xl font-semibold mb-12 text-black dark:text-white'>Want to see more about this project?</div>
            <div className='links__buttons'>
                <a href={codeUrl && codeUrl} rel="noreferrer" target="_blank" className={`links__buttons__button ${!codeUrl ? "links__buttons__button--disabled" : "hover:opacity-80"}`}><FaGithubSquare /> See the code</a>
                <a href={demoUrl && demoUrl} rel="noreferrer" target="_blank" className={`links__buttons__button ${!demoUrl ? "links__buttons__button--disabled" : "hover:opacity-80"}`}><FaEye /> See the demo</a>
            </div>
        </div>
    </div>
  )
}

export default Links;