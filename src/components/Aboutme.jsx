import { useState } from 'react';
import { motion } from "framer-motion"


function Aboutme(){
  return(
    <div className="section m-auto aboutme">
      <div className="mb-[130px] w-full h-px bg-zinc-800"></div>
        <div className="container">
        <div className="flex items-center gap-10 w-10/12 m-auto max-[600px]:flex-col">
        <div className="max-[600px]:justify-center">
        <img className="mx-auto w-11/12 max-[600px]:w-56 rounded-full" src={'https://coihsan.github.io/profile/assets/avatar.webp'} alt="" />
        <div className="line-separator-hero">
            <span></span>
        </div>
        </div>
        <div>
        <h1 className="text-5xl mb-5 font-bold max-[470px]:text-4xl ">Short Bio</h1>
        <p>2016 was the year I started my career as a Graphic Designer, and in 2018 I started my career as a Design and Digital Marketer. and now I am expanding my knowledge and skills in Marketing Department such as Design, Digital Marketing including SEO and Web Developer.</p>
        <br/>
        <p className="">See all my badges on <a className="text-sky-400" target="_blank" href="https://www.credential.net/profile/muhammadihsan/wallet">Accredible <i class="fa-solid fa-arrow-up-right-from-square text-zinc-400"></i></a></p> 
        </div>
        </div>
        
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Aboutme