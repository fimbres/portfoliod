import React, { FC, useState } from "react";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import "../assets/scss/main.scss";
import ContactMe from "../components/ContactMe";
import ModalContext from "../context/ModalContext";

const IndexPage: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, handleContact: () => setShowModal(!showModal) }}>
      <Layout>
        <Seo title="Home" />
        <HomeHeader />
        <AboutMe />
        <Skills />
        <Projects title="Projects"/>
        <ContactMe />
      </Layout>
    </ModalContext.Provider>
  )
}

export default IndexPage;
