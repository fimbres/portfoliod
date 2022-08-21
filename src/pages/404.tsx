import React, { FC, useState } from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import ModalContext from "../context/ModalContext";
import "../assets/scss/pages.scss";
import ContactMe from "../components/ContactMe";

const NotFoundPage: FC = () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <ModalContext.Provider value={{ showModal, handleContact: () => setShowModal(!showModal) }}>
        <Layout>
            <Seo title="Not Found" />
            <div className="bg-white dark:bg-neutral-800">
                <div className="page">
                    <div className="page__title">Page not found! :(</div>
                    <Link className="page__button" to="/">Go to Home Page</Link>
                </div>
            </div>
            <ContactMe />
        </Layout>
      </ModalContext.Provider>
    )
  }

export default NotFoundPage;
