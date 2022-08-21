import React, { FC } from 'react';
import { Link } from 'gatsby';

import { navItem } from '..';
import "./MobileMenu.scss";
import Toggle from '../Toggle';

interface MobileMenuProps {
    navItems: navItem[];
    showMobileMenu: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ navItems, showMobileMenu }) => {
  return (
    <div className={`nav ${showMobileMenu ? "open" : ""}`}>
        <div className={`menu-nav ${showMobileMenu ? "open" : ""}`}>
            {navItems.map((item, index) => <div key={index} onClick={item.onClick} className={`menu-nav__item ${showMobileMenu ? "open" : ""}`}>{item.name}</div>)}
            <div className={`menu-nav__item ${showMobileMenu ? "open" : ""}`}>
              <Toggle />
            </div>
        </div>
    </div>
  )
}

export default MobileMenu;