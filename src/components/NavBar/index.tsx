import React, { FC, useState } from 'react';
import { Link } from 'gatsby';

import Logo from "../../assets/svg/logo.svg";
import "./NavBar.scss";
import Toggle from './Toggle';
import MobileMenu from './MobileMenu';
import ModalContext from '../../context/ModalContext';

export interface navItem {
  name: string;
  onClick: () => void;
}

const NavBar: FC = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navbarClassName = `navbar ${scrollHeight > 0 ? "navbar--active" : showMobileMenu ? "navbar--mobile" : "navbar--inactive"}`;
  const isBrowser = typeof window !== "undefined";

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  if(isBrowser){
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <ModalContext.Consumer>
      {ModalContext => {
        const navItems: navItem[] = [
          {
            name: "Contact Me",
            onClick: ModalContext.handleContact,
          },
        ];

        return (
          <>
            <div className={ModalContext.scroll ? navbarClassName : "navbar navbar--active"}>
              <div className='navbar__items'>
                <Link to='/' className='navbar__items__logo'>
                  <Logo className='navbar__items__logo__img'/>
                  <div className='navbar__items__logo__text'>Fimbres</div>
                </Link>
                <div className='navbar__items__nav-items'>
                  {navItems.map((item, index) => <div key={index} onClick={item.onClick} className='navbar__items__nav-items__nav-item'>{item.name}</div>)}
                  <Toggle />
                </div>
                <div className={`navbar__items__hamburger-menu ${showMobileMenu ? "open" : ""}`} onClick={() => setShowMobileMenu(!showMobileMenu)}/>
              </div>
            </div>
            <MobileMenu navItems={navItems} showMobileMenu={showMobileMenu}/>
          </>
        )
      }}
    </ModalContext.Consumer>
  )
}

export default NavBar;