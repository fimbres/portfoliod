import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export const query = graphql`
  query ($title: String) {
    contentfulProject(title: {eq: $title}) {
      carousselImage {
        gatsbyImage(width: 300)
      }
      codeUrl {
        raw
      }
      features {
        feature
      }
      id
      images {
        gatsbyImage(width: 300)
        description
      }
      longDescription {
        longDescription
      }
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

const Template: FC = ({ data }) => {
  return (
    <Layout>
      <div className='mt-56'>{data.contentfulProject.shortDescription}</div>
    </Layout>
  )
}

export default Template;