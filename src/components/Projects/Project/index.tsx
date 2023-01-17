import React, { FC } from "react";
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

import "./project.scss";

interface ProjectProps {
  title: string;
  slug: string;
  image: IGatsbyImageData;
  description: string;
}

const Project: FC<ProjectProps> = ({ title, image, slug, description }) => {
  return (
    <div className="project">
      <Link to={`/${slug}`}>
      <GatsbyImage image={image} className={`project__image ${slug === "eva-gyroscope" || slug === "clean-location" ? "mobile-vertical" : "desktop"}`} alt={title}/>
      </Link>
      <div className="project__title">{title}</div>
      <div className="project__text">{description}</div>
    </div>
  );
};

export default Project;
