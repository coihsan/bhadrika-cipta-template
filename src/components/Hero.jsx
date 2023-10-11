import { useState } from 'react'
import google from '../assets/google.svg';
import telegram from '../assets/telegram.svg';

function Hero(){
  return(
    <div className="hero-section section flex items-center w-full ">
      <div className="hero-container container flex flex-col justify-center">
        <p className="Hello max-[470px]:text-4xl max-[470px]:text-[2rem]">Hi there, I'm <span className="text-color">Bhadrika Cipta </span>👋🏻</p>
        <p className="Hello max-[470px]:text-4xl text-zinc-400 max-[470px]:text-[2rem]">Digital Marketing <span className="text-color">&amp; {'{Web Development}'}</span></p>
        
        <div className="certificate flex items-center gap-5 max-[470px]:gap-1 justify-center mx-auto mt-5 max-[470px]:flex-col">
          <h4 className="text-xl max-[470px]:text-[1rem]">Credentials :</h4>
          <div className="skillshop flex items-center gap-2 ">
            <img className="w-10 max-[470px]:w-8" src={google}/>
            <a className="link-certificate " target="_blank" href="">Skillshop</a>
            <i class="fa-solid fa-arrow-up-right-from-square text-zinc-400"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
