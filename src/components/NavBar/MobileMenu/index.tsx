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
            {navItems.map((item, index) => <Link key={index} to={item.to} className={`menu-nav__item ${showMobileMenu ? "open" : ""}`} activeClassName='active'>{item.name}</Link>)}
            <div className={`menu-nav__item ${showMobileMenu ? "open" : ""}`}>
              <Toggle />
            </div>
        </div>
    </div>
  )
}

export default MobileMenu;