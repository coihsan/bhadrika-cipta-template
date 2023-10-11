import { useState } from 'react'
import React from "react";
import cardID from '../assets/id-card.svg';
import arrow from '../assets/arrow.svg';
import Skills from './Skills';

  const Navbar = () =>{
    const [isActive, setIsActive] = React.useState(false);

    return(
      <nav className="NavbarEl sticky top-0 left-0 backdrop-blur-md">
      <div className="topNav section flex items-center justify-between">
      <div className="status-work flex-1">
          <div className="flex item-center justify-center relative">
            <div className="bullet-pulse absolute"></div> 
            <div className="bullet-pulse animate-ping"></div> 
          </div>
          <span className="max-[470px]:text-[14px]">Available for freelance</span>
        </div>
        <div className="flex gap-2 menu-dekstop">
          <img src={arrow} alt=""/>
          <a className="navlink" target="_blank" href="#">Let's Talk!</a>
        </div>
      </div>
    </nav>
    )
  }
export default Navbar;
