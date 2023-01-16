import React, { FC, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Seo: FC<SeoProps> = ({ title, children }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = "You can see more about my work and contact me in this awesome portfolio!" || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${defaultTitle} | ${title}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || `@fimbres`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      {children}
    </>
  )
}

export default Seo;
