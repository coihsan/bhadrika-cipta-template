import { useState } from 'react'
import google from '../assets/google.svg';
import telegram from '../assets/telegram.svg';

function Hero(){
  return(
    <div className="hero-section section flex items-center w-full ">
      <div className="hero-container container flex flex-col justify-center">
        <p className="Hello max-[470px]:text-4xl max-[470px]:text-[2rem]">Hi there, I'm <span className="text-color">Daniel </span>👋🏻</p>
        <p className="Hello max-[470px]:text-4xl max-[470px]:text-[2rem]">Digital Marketing <span className="text-color">&amp; {'{Front-End Dev}'}</span></p>
        
      </div>
    </div>
  )
}

export default Hero;
