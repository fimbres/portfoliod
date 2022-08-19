import React, { FC } from "react";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import "../assets/scss/main.scss";

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHeader />
    <AboutMe />
    <Skills />
    <Projects />
  </Layout>
)

export const Head = () => <Seo title="Home" />;
export default IndexPage;
