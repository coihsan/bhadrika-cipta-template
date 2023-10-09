import { useState } from 'react';
import { motion } from "framer-motion"


function Aboutme(){
  return(
    <div className="section m-auto aboutme">
      <div className="mb-[130px] w-full h-px bg-zinc-800"></div>
        <div className="container">
        <div className="flex items-center gap-10 w-10/12 m-auto max-[600px]:flex-col">
        <div className="max-[600px]:justify-center">
        <img className="mx-auto w-11/12 max-[600px]:w-56 rounded-full" src={'https://coihsan.github.io/iseng/assets/1690805230779.webp'} alt="avatar" />
        <div className="line-separator-hero">
            <span></span>
        </div>
        </div>
        <div>
        <h1 className="text-5xl mb-5 font-bold max-[470px]:text-4xl ">Short Bio</h1>
        <p>I am a digital marketing enthusiast with a passion for helping businesses grow online. I have over 5 years of experience in the industry, and I am an expert in a variety of digital marketing channels, including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, and content marketing. I am also a certified Google Ads Expert.</p>
        <br/>
        </div>
        </div>
        
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Aboutme