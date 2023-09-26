import { useState } from 'react';
import link from '../assets/link.svg';

function Aboutme(){
  return(
    <div className="section m-auto">
        <div className="container">
        <h1 className="text-5xl mb-8 font-bold">Short Bio</h1>
        <img src={'https://github.com/coihsan/profile/blob/cab0e579ca935f7a5f9a4735ea294c64376ad6bc/assets/avatar.webp'} alt="" />
        <p>I'm always up to date on the latest algorithms, like those used in social media or Google, marketing techniques, as well as learning about new technologies and how they can be applied to my job.</p>
        <br/>
        <div className="flex items-center"><p>See all my credential on <a className="accredible link-color" href="">Accredible </a></p> <img className="link-icon w-5" src={link} alt=""/></div>
        <div className="line-separator-hero">
            <span></span>
        </div>
      </div>
    </div>
  )
}

export default Aboutme