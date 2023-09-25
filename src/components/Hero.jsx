import { useState } from 'react'
import sunglasses from '/public/sunglasses.svg';

function Hero(){
  return(
    <div className="hero-section flex items-center w-full">
      <div className="hero-container flex flex-col justify-center">
        <img className="sunglasses" src={sunglasses} alt="sunflasses" />
        <p className="Hello">Hi there, I'm <span className="text-color">Ihsan </span>👋🏻</p>
        <p className="Hello">Digital Marketing &amp; {'{Front-End Dev}'}</p>
        <div className="line-separator-hero">
          <span></span>
        </div>
        
        <div className="div-call-to-action flex align-center justify-center">
        <a className="callToAction" href="#"><i class="fa-solid fa-arrow-right"></i> Start a Project</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;