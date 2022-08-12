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
      <div className="h-64 w-80 mb-5 flex flex-col items-center">
        <GatsbyImage image={image} className="object-cover h-full w-full drop-shadow-xl" alt={title}/>
      </div>
      <div className="text-black dark:text-white text-center text-xl font-medium mb-3">{title}</div>
      <div className="text-black dark:text-white text-base font-normal text-center mb-8">{description}</div>
    </Link>
  );
};

export default Project;
