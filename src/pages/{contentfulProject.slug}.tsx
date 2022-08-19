import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import TemplateHeader from '../components/TemplateHeader';

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
  const { shortDescription, title, carousselImage, slug } = data.contentfulProject;
  const mainImage = getImage(carousselImage);
  return (
    <Layout>
      <TemplateHeader title={title} description={shortDescription} image={mainImage!} slug={slug}/>
      <div className='mt-56'>{shortDescription}</div>
    </Layout>
  )
}

export const Head = () => <Seo title="Project" />;
export default Template;
