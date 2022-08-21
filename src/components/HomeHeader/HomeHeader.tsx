import React, { FC } from 'react';

import Video from "../../assets/video/background-video.mp4";
import Logo from "../../assets/svg/logo.svg";
import "./HomeHeader.scss";

const HomeHeader: FC = () => {
  return (
    <div className='header' >
        <video autoPlay muted loop src={Video} className='header__video'/>
        <div className='header__info-container'>
            <Logo className="header__info-container__svg"/>
            <h1 className='header__info-container__text'>Software Development</h1>
        </div>
    </div>
  )
}

export default HomeHeader;