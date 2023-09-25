import { useState } from 'react'
import sunglasses from '/public/sunglasses.svg';
import google from '../assets/google.svg';
import link from '../assets/link.svg';

function Hero(){
  return(
    <div className="hero-section flex items-center w-full">
      <div className="hero-container section flex flex-col justify-center">
        <img className="sunglasses" src={sunglasses} alt="sunflasses" />
        <p className="Hello">Hi there, I'm <span className="text-color">Ihsan </span>👋🏻</p>
        <p className="Hello">Digital Marketing &amp; {'{Front-End Dev}'}</p>
        <div className="line-separator-hero">
          <span></span>
        </div>
        <div className="certificate flex items-center gap-1">
          <img className="w-11" src={google}/>
          <a className="link-certificate" href="">Skillshop</a>
          <img className="link-icon w-5 " src={link}/>
        </div>
        <div className="div-call-to-action flex align-center justify-center">
        <a className="callToAction" href="#"><i class="fa-solid fa-arrow-right"></i> Start a Project</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;