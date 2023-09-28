import { useState } from 'react'
import React from "react";
import cardID from '../assets/id-card.svg';
import arrow from '../assets/arrow.svg';
import Skills from './Skills';

  const Navbar = () =>{
    const [isActive, setIsActive] = React.useState(false);
    const [icon, setIcon] = useState("fa-bars");

    const handleClick = () => {
      setIsActive(!isActive)
      setIcon(icon === "fa-bars" ? "fa-x" : "fa-bars");
    };

    return(
      <section >
        <nav className="NavbarEl fixed top-0 left-0">
          <div className="topNav section flex items-center justify-between">
          <div className="status-work flex-1">
              <div className="flex item-center justify-center relative">
                <div className="bullet-pulse absolute"></div> 
                <div className="bullet-pulse animate-ping"></div> 
              </div>
              <span>Available for freelance</span>
            </div>
            <div className="flex gap-2 menu-dekstop">
              <img src={arrow} alt=""/>
              <a className="navlink" href="#">Let's Talk!</a>
            </div>
          </div>
    </nav>
      </section>
    )
  }
export default Navbar;