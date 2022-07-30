import React, { FC } from "react";

import Seo from "../components/seo";

const NotFoundPage: FC = () => (
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
)

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
