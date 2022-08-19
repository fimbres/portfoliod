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
    <Link className="flex flex-col justify-center items-center lg:p-8 p-4" to={`/${slug}`}>
      <GatsbyImage image={image} className={`project__image ${slug === "eva-gyroscope" ? "mobile-vertical" : slug === "project-01" ? "mobile-horizontal" : "desktop"}`} alt={title}/>
      <div className="project__title">{title}</div>
      <div className="project__text">{description}</div>
    </Link>
  );
};

export default Project;
