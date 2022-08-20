import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import TemplateHeader from '../components/TemplateHeader';
import Links from '../components/Links';
import { Description } from '../components/Description';
import { ScreenImages } from '../components/ScreenImages';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import { Projects } from '../components/Projects';

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
  data: any;
}

const Template: FC<TemplateProps> = ({ data }) => {
  const { shortDescription, title, carousselImage, slug, codeUrl, demoUrl, longDescription, images, features, technologies } = data.contentfulProject;
  const mainImage = getImage(carousselImage);

  return (
    <Layout>
      <Seo title={title} />
      <TemplateHeader title={title} description={shortDescription} image={mainImage!} slug={slug}/>
      <Description description={longDescription}/>
      <ScreenImages slug={slug} screenImages={images}/>
      <Features features={features}/>
      <Technologies technologies={technologies}/>
      <Links codeUrl={codeUrl} demoUrl={demoUrl}/>
      <Projects title='Other Projects'/>
    </Layout>
  )
}

export default Template;
