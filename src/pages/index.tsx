import React, { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import Seo from "../components/seo";
import "../assets/scss/main.scss";

const IndexPage: FC = () => (
  <>
    <Seo title="Home" />
    <HomeHeader />
    <div className="h-screen"/>
    <div className="py-24">
      
    </div>
  </>
)

export const Head = () => <Seo title="Home" />;
export default IndexPage;
