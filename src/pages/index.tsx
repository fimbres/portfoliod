import React, { FC } from "react";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import "../assets/scss/main.scss";

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHeader />
  </Layout>
)

export const Head = () => <Seo title="Home" />;
export default IndexPage;
