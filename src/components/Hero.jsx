import { useState } from 'react'
import sunglasses from '/public/sunglasses.svg';
import google from '../assets/google.svg';
import link from '../assets/link.svg';
import telegram from '../assets/telegram.svg';

function Hero(){
  return(
    <div className="hero-section section flex items-center w-full">
      <div className="hero-container container flex flex-col justify-center">
        <img className="sunglasses" src={sunglasses} alt="sunflasses" />
        <p className="Hello max-[470px]:text-4xl">Hi there, I'm <span className="text-color">Ihsan </span>👋🏻</p>
        <p className="Hello max-[470px]:text-4xl">Digital Marketing <span className="text-color">&amp; {'{Front-End Dev}'}</span></p>
        
        <div className="certificate flex items-center gap-5 justify-center mx-auto mt-5 py-2">
          <h4 className="text-xl">Credentials :</h4>
          <div className="skillshop flex items-center gap-1">
            <img className="w-11" src={google}/>
            <a className="link-certificate" target="_blank" href="https://skillshop.exceedlms.com/profiles/038b28dd54cb4f11bd4668684c05e95f">Skillshop</a>
            <img className="link-icon w-5 " src={link}/>
          </div>
        </div>
        <div className="mt-5 div-call-to-action flex align-center justify-center">
        <a className="callToAction flex gap-1" href="#"><img src={telegram} alt=""/> Start a Project</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;