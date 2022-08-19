import React, { FC } from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import "../assets/scss/pages.scss";

const NotFoundPage: FC = () => (
    <Layout>
        <div className="bg-white dark:bg-neutral-800">
            <div className="page">
                <div className="page__title">Page not found! :(</div>
                <Link className="page__button" to="/">Go to Home Page</Link>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Not Found" />;
export default NotFoundPage;
