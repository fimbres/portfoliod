import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import TemplateHeader from '../components/TemplateHeader';
import Links from '../components/Links';

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
        color
      }
    }
  }
`;

interface TemplateProps {
  data: any;
}

const Template: FC<TemplateProps> = ({ data }) => {
  const { shortDescription, title, carousselImage, slug, codeUrl, demoUrl } = data.contentfulProject;
  const mainImage = getImage(carousselImage);
  return (
    <Layout>
      <Seo title={title} />
      <TemplateHeader title={title} description={shortDescription} image={mainImage!} slug={slug}/>
      <Links codeUrl={codeUrl} demoUrl={demoUrl}/>
    </Layout>
  )
}

export default Template;
