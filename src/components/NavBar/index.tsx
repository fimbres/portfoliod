import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from "@reach/router";

import Logo from "../../assets/svg/logo.svg";
import "./NavBar.scss";
import Toggle from './Toggle';
import MobileMenu from './MobileMenu';

export interface navItem {
  name: string;
  to: string;
}

const NavBar: FC = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const path = globalHistory.location.pathname;
  const navbarClassName = path === "/" ? `navbar ${scrollHeight > 0 ? "navbar--active" : showMobileMenu ? "navbar--mobile" : "navbar--inactive"}` : "navbar navbar--active";
  const navItems: navItem[] = [
    {
      name: "About Me",
      to: "/about-me"
    },
    {
      name: "Contact",
      to: "/contact"
    },
  ];

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div className={navbarClassName}>
        <div className='navbar__items'>
          <Link to='/' className='navbar__items__logo'>
            <Logo className='navbar__items__logo__img'/>
            <div className='navbar__items__logo__text'>Fimbres</div>
          </Link>
          <div className='navbar__items__nav-items'>
            {navItems.map((item, index) => <Link key={index} to={item.to} className='navbar__items__nav-items__nav-item' activeClassName='text-white'>{item.name}</Link>)}
            <Toggle />
          </div>
          <div className={`navbar__items__hamburger-menu ${showMobileMenu ? "open" : ""}`} onClick={() => setShowMobileMenu(!showMobileMenu)}/>
        </div>
      </div>
      <MobileMenu navItems={navItems} showMobileMenu={showMobileMenu}/>
    </>
  )
}

export default NavBar;