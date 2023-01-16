import React, { FC, useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Slider from "react-slick";

import Project from "./Project";

const query = graphql`
  query {
    allContentfulProject {
      nodes {
        carousselImage {
          gatsbyImage(placeholder: TRACED_SVG, width: 964)
        }
        title
        slug
        id
        shortDescription
      }
    }
  }
`;

interface ProjectsProps {
  title: string;
}

export const Projects: FC<ProjectsProps> = ({ title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { allContentfulProject: { nodes: projects } } = useStaticQuery(query);

  return (
    <div className="py-24 bg-zin-50 dark:bg-neutral-800">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col w-full justify-center items-center overflow-hidden">
            <div className="text-3xl text-red-500 font-semibold mb-7">{title}</div>
            <Slider
              adaptiveHeight
              centerMode
              centerPadding="0px"
              autoplay
              infinite
              autoplaySpeed={5000}
              swipe
              className="flex justify-center w-full"
              beforeChange={(index) => setSelectedIndex(index)}
            >
              {projects.map(project => {
                const pathToImage = getImage(project.carousselImage);

                return (
                    <Project
                        key={project.id}
                        slug={project.slug}
                        title={project.title}
                        image={pathToImage!}
                        description={project.shortDescription}
                    />
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center space-x-1 lg:mt-0 mt-5">
          {projects.map((_, index) => {
            return (
              <span
                key={index}
                className={`border border-black dark:border-white rounded-full w-2 h-2 ${selectedIndex === index ? "bg-black dark:bg-white" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
