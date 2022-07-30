import React, { FC } from 'react';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '../../assets/images/logo.png';
import "./NavBar.scss";

const NavBar: FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar__items'>
        <Link to='/' className='navbar__items__logo'>
          <img src={Logo} alt="Logo" className='navbar__items__logo__img'/>
          <div className='navbar__items__logo__text'>Fimbres</div>
        </Link>
        <div className='navbar__items__nav-items'>
          <Link to='/' className='navbar__items__nav-items__nav-item'>Contact</Link>
        </div>
        <GiHamburgerMenu className='navbar__items__hamburger-menu'/>
      </div>
    </div>
  )
}

export default NavBar;