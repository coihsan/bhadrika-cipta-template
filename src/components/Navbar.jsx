import { useState } from 'react'
import React from "react";
import cardID from '../assets/id-card.svg';

  const Navbar = () =>{
    const [isActive, setIsActive] = React.useState(false);
    const [icon, setIcon] = useState("fa-bars");

    const handleClick = () => {
      setIsActive(!isActive)
      setIcon(icon === "fa-bars" ? "fa-x" : "fa-bars");
    };

    return(
      <nav className="NavbarEl fixed">
      <div className="topNav section flex align-center justify-between relative">
      <div className="status-work">
          <div className="bullet-pulse"></div> 
          <span>Available for freelance</span>
        </div>
        <div className={`absolute flex flex-col top-14 navmenu ${isActive ? "active" : ""}`}>
          <a className="navlink" href="#">Aboutme</a>
          <a className="navlink" href="#">Skills</a>
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
        <div className="navbar-right flex items-center gap-3">
          <button className="flex items-center gap-1"><img src={cardID} alt=""/> My Card</button>
        <button id="menu-toggle" className={'menu-toggle flex items-center justify-center ${isActive ? "active : "}'} onClick={handleClick}><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </nav>
    )
  }
export default Navbar;