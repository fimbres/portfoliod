import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

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
      id
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
      }
    }
  }
`;

interface TemplateProps {
  data: any;
}

const Template: FC<TemplateProps> = ({ data }) => {
  return (
    <Layout>
      <div className='mt-56'>{data.contentfulProject.shortDescription}</div>
    </Layout>
  )
}

export default Template;