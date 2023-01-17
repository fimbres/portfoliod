import React, { FC } from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

import "./TemplateHeader.scss";

interface TemplateHeaderProps {
    title: string;
    slug: string;
    description: string;
    image: ImageDataLike;
}

const TemplateHeader: FC<TemplateHeaderProps> = ({ title, description, image, slug }) => {
    const pathToImage = getImage(image);

    return (
        <div className='lg:py-16 bg-neutral-300 dark:bg-neutral-700 mt-12'>
            <div className='template-header'>
                <div className='template-header__text-container'>
                    <div className='template-header__text-container__title'>{title}</div>
                    <div className='template-header__text-container__text'>{description}</div>
                </div>
                <div className='template-header__image-container'>
                    <GatsbyImage image={pathToImage!} alt={title} className={`template-header__image-container__image ${slug === "eva-gyroscope" || slug === "clean-location" ? "mobile-vertical-Header" : "desktop-Header"}`}/>
                </div>
            </div>
        </div>
    )
}

export default TemplateHeader;