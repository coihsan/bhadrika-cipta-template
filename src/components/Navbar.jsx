import { useState } from 'react'
import React from "react";

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
        <div className={`absolute flex gap-2.5 flex-col top-14 navmenu ${isActive ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Aboutme</a>
          <a href="#">Skills</a>
          <a href="#">Offering</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-right">
        <button id="menu-toggle" className={'menu-toggle flex items-center justify-center ${isActive ? "active : "}'} onClick={handleClick}><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </nav>
    )
  }
export default Navbar;