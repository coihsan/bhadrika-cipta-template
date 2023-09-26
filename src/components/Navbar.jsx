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
            <div className={`flex flex-initial absolute top-2 right-40  navmenu-dekstop ${isActive ? "active" : ""}`}>
              <a className="navlink" href="#">Home</a>
              <a className="navlink" href={'./Aboutme'}>Aboutme</a>
              <a className="navlink" href="#Skills">Skills</a>
              <a className="navlink" href="#">Offering</a>
              <a className="navlink" href="#">Projects</a>
              <a className="navlink" href="#">Blog</a>
              <a className="navlink" href="#">Contact</a>
            </div>
          </div>
    </nav>
        <div className="mobile-menu fixed w-full flex items-center p-2">
        <div className={`absolute flex flex-col justify-center navmenu  ${isActive ? "active" : ""}`}>
          <a className="navlink" href="#">Home</a>
          <a className="navlink" href={'./Aboutme'}>Aboutme</a>
          <a className="navlink" href="#Skills">Skills</a>
          <a className="navlink" href="#">Offering</a>
          <a className="navlink" href="#">Projects</a>
          <a className="navlink" href="#">Blog</a>
          <a className="navlink" href="#">Contact</a>
          <div className="social-icon flex items-center gap-2 justify-center">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a href="#"><i class="fa-brands fa-codepen"></i></a>
          </div>
        </div>
            <div className="navbar-right container flex items-center justify-end gap-3">
              <button className="flex items-center gap-1"><img src={cardID} alt=""/> My Card</button>
              <button id="menu-toggle" className={'menu-toggle flex items-center justify-center ${isActive ? "active : "}'} onClick={handleClick}><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
      </section>
    )
  }
export default Navbar;