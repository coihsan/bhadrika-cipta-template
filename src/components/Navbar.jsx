import { useState } from 'react'

function Navbar(){
  return(
    <div className="NavbarEl">
      <nav className="topNav flex align-center justify-between">
        <a href="#" className="logo">coihsan</a>
        <div className="navmenu">
          <a href="#">Home</a>
          <a href="#">Aboutme</a>
          <a href="#">Skills</a>
          <a href="#">Offering</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-right">
        
        <div className="hamburger-menu">
          <input type="checkbox" id="menu-toggle"/>
          <div className="hamburger-line">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;