import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import TemplateHeader from '../components/TemplateHeader';
import Links from '../components/Links';
import { Description } from '../components/Description';
import { ScreenImages } from '../components/ScreenImages';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import { Projects } from '../components/Projects';
import ContactMe from '../components/ContactMe';
import ModalContext from '../context/ModalContext';

export const query = graphql`
  query ($slug: String) {
    contentfulProject(slug: {eq: $slug}) {
      carousselImage {
        gatsbyImage(width: 300)
      }
      codeUrl
      demoUrl
      features {
        feature
      }
      images {
        gatsbyImage(width: 300)
        description
      }
      longDescription
      shortDescription
      slug
      title
      technologies {
        percentage
        technology
        fromColor
        toColor
      }
    }
  }
`;

interface TemplateProps {
  data: {
    contentfulProject: {
      carousselImage: {
        gatsbyImage: ImageDataLike;
      };
      codeUrl: string;
      demoUrl: string;
      features: {
        feature: string;
      }[];
      images: {
        gatsbyImage: ImageDataLike;
        description: string;
      }[];
      longDescription: string;
      shortDescription: string;
      slug: string;
      title: string;
      technologies: {
        percentage: string;
        technology: string;
        fromColor: string;
        toColor: string;
      }[];
    }
  }
}

const Template: FC<TemplateProps> = ({ data }) => {
  const { shortDescription, title, carousselImage, slug, codeUrl, demoUrl, longDescription, images, features, technologies } = data.contentfulProject;
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, handleContact: () => setShowModal(!showModal) }}>
      <Layout>
        <Seo title={title} />
        <TemplateHeader title={title} description={shortDescription} image={carousselImage} slug={slug}/>
        <Description description={longDescription}/>
        <ScreenImages slug={slug} screenImages={images}/>
        <Features features={features}/>
        <Technologies technologies={technologies}/>
        <Links codeUrl={codeUrl} demoUrl={demoUrl}/>
        <Projects title='Other Projects'/>
        <ContactMe />
      </Layout>
    </ModalContext.Provider>
  )
}

export default Template;
