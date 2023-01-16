import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [showBackground, setShowBackground] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    const scrollHeight = scrollRef?.current?.scrollTop;
    setScrollHeight(scrollHeight!);
    console.log(scrollHeight);
  }

  useEffect(() => {
    setShowBackground(scrollHeight > 0);
  }, [scrollHeight]);
  

  return (
    <main className='h-screen scrollbar-thin scrollbar-track-neutral-300 dark:scrollbar-track-neutral-800 scrollbar-thumb-red-500' ref={scrollRef} onScroll={onScroll}>
        <NavBar showBackground={showBackground} />
        {children}
        <Footer />
    </main>
  )
}

export default Layout;