import { useState } from 'react';
import link from '../assets/link.svg';

function Aboutme(){
  return(
    <div className="section m-auto">
        <div className="container">
        <div className="flex items-center gap-10 max-[600px]:flex-wrap">
        <div>
        <img className="mx-auto w-96 max-[600px]:w-52 rounded-full" src={'https://coihsan.github.io/profile/assets/avatar.webp'} alt="" />
        <div className="line-separator-hero">
            <span></span>
        </div>
        </div>
        <div>
        <h1 className="text-5xl mb-8 font-bold">Short Bio</h1>
        <p>I'm always up to date on the latest algorithms, like those used in social media or Google, marketing techniques, as well as learning about new technologies and how they can be applied to my job.</p>
        <br/>
        <div className="flex items-center"><p>See all my credential on <a className="accredible link-color" href="">Accredible </a></p> <img className="link-icon w-5" src={link} alt=""/></div>
        
        </div>
        </div>
        <div className="mb-separator"></div>
      </div>
    </div>
  )
}

export default Aboutme