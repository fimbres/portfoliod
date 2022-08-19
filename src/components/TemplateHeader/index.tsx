import React, { FC } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import "./TemplateHeader.scss";

interface TemplateHeaderProps {
    title: string;
    slug: string;
    description: string;
    image: IGatsbyImageData;
}

const TemplateHeader: FC<TemplateHeaderProps> = ({ title, description, image, slug }) => {
  return (
    <div className='md:py-16 bg-neutral-300 dark:bg-neutral-800 mt-12'>
        <div className='template-header'>
            <div className='template-header__text-container'>
                <div className='template-header__text-container__title'>{title}</div>
                <div className='template-header__text-container__text'>{description}</div>
            </div>
            <div className='template-header__image-container'>
                <GatsbyImage image={image} alt={title} className={`template-header__image-container__image ${slug === "eva-gyroscope" ? "mobile-vertical-Header" : slug === "project-01" ? "mobile-horizontal-Header" : "desktop-Header"}`}/>
            </div>
        </div>
    </div>
  )
}

export default TemplateHeader;