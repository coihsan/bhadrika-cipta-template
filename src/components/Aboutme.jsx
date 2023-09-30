import { useState } from 'react';
import link from '../assets/link.svg';
import { motion } from "framer-motion"


function Aboutme(){
  return(
    <div className="section m-auto aboutme">
      <div className="mb-[130px] w-full h-px bg-zinc-800"></div>
        <div className="container">
        <div className="flex items-center gap-10 w-10/12 m-auto max-[600px]:flex-wrap">
        <div className="max-[600px]:justify-center">
        <img className="mx-auto w-11/12 max-[600px]:w-56 rounded-full" src={'https://coihsan.github.io/profile/assets/avatar.webp'} alt="" />
        <div className="line-separator-hero">
            <span></span>
        </div>
        </div>
        <div>
        <h1 className="text-5xl mb-8 font-bold ">Short Bio</h1>
        <p>I'm always up to date on the latest algorithms, like those used in social media or Google, marketing techniques, as well as learning about new technologies and how they can be applied to my job.</p>
        <br/>
        <p className="">See all my badges on <a className="text-blue-400" target="_blank" href="https://www.credential.net/profile/muhammadihsan/wallet">Accredible <img className="w-5" src={link} alt="accredible"/></a></p> 
        </div>
        </div>
        
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Aboutme