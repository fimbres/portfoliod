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

interface NavBarProps {
  showBackground: boolean;
}

const NavBar: FC<NavBarProps> = ({ showBackground }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navbarClassName = `navbar ${showBackground ? "navbar--active" : showMobileMenu ? "navbar--mobile" : "navbar--inactive"}`;

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