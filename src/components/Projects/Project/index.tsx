import React, { FC } from "react";
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

interface ProjectProps {
  title: string;
  slug: string;
  image: IGatsbyImageData;
  description: string;
}

const Project: FC<ProjectProps> = ({ title, image, slug, description }) => {
  return (
    <Link className="flex flex-col justify-center items-center w-full lg:p-8 p-4" to={`/${slug}`}>
        <GatsbyImage image={image} className="w-60 drop-shadow-xl mb-5" alt={title}/>
        <div className="text-black dark:text-white text-center text-xl font-medium mb-3">{title}</div>
        <div className="text-black dark:text-white text-base font-normal text-center mb-8">{description}</div>
    </Link>
  );
};

export default Project;
