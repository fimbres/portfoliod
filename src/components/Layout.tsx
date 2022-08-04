import React, { ReactNode } from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default Layout;