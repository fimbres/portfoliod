import React, { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import "../assets/scss/main.scss";

const IndexPage: FC = () => (
  <>
    <Seo title="Home" />
    <div className="bg-red-400 text-5xl font-bold">hola</div>
  </>
)

export const Head = () => <Seo title="Home" />;
export default IndexPage;
