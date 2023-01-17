import React, { FC } from "react";
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';

import "./screen-slide.scss";

interface ScreenSlideProps {
  slug: string;
  imageClassName: "screen-slide__mobile-horizontal" | "screen-slide__mobile-vertical" | "screen-slide__desktop";
  image: IGatsbyImageData;
  description: string;
  index: number;
}

const ScreenSlide: FC<ScreenSlideProps> = ({ image, imageClassName, slug, description, index }) => {
  const fixexImageClassName = slug === "eva-gyroscope" && index === 0 ? "slide__robot" : slug === "clean-location" && index === 2 ? "slide__landing" : imageClassName; 
  return (
    <div className="screen-slide">
      <GatsbyImage image={image} className={`screen-slide__image ${fixexImageClassName}`} alt={slug}/>
      <div className="screen-slide__text">{description}</div>
    </div>
  );
};

export default ScreenSlide;
