import { useState } from 'react'
import React from "react";
import cardID from '../assets/id-card.svg';
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
            <div className={`flex menu-dekstop ${isActive ? "active" : ""}`}>
              <a className="navlink" href="#">Home</a>
              <a className="navlink" href="#">Projects</a>
              <a className="navlink" href="#">Blog</a>
              <a className="navlink" href="#">Let's Talk!</a>
            </div>
          </div>
    </nav>
        <div className="mobile-menu w-full fixed flex items-center p-2">
        <div className={`absolute  top-1 left-0 flex flex-col justify-center navmenu  ${isActive ? "active" : ""}`}>
          <a className="navlink" href="#">Home</a>
          <a className="navlink" href="#">Projects</a>
          <a className="navlink" href="#">Blog</a>
        </div>
            <div className="absolute top-3 right-2 flex items-center justify-end gap-3">
              <button className="flex items-center gap-1"><img src={cardID} alt=""/> My Card</button>
              <button id="menu-toggle" className={'menu-toggle flex items-center justify-center ${isActive ? "active : "}'} onClick={handleClick}><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
      </section>
    )
  }
export default Navbar;