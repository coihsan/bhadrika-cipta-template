import { useState } from 'react'
import sunglasses from '/public/sunglasses.svg';

function Hero(){
  return(
    <div className="hero-section">
      <div className="hero-container">
        <img className="sunglasses" src={sunglasses} alt="sunflasses" />
        <p className="Hello">Hi there, I'm <span className="text-color">Ihsan </span>👋🏻</p>
        <p className="Hello">Digital Marketing &amp; {'{Front-End Dev}'}</p>
        <div className="line-separator-hero">
          <span></span>
        </div>
        <div className="status-work">
          <div className="bullet-pulse"></div> 
          <span>Available for freelance</span>
        </div>
        <div className="div-call-to-action flex align-center">
        <a className="callToAction" href="#"><i class="fa-solid fa-arrow-right"></i> Start a Project</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;