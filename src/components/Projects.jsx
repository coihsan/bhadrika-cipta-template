import { useState } from 'react'
import preview from '../assets/preview.svg';
import github from '../assets/github.svg';

function Projects(){
  return (
    <div className="section max-[600px]:w-full">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <h1 className="text-5xl font-bold">Projects</h1>
          <a href="#">Index</a>
        </div>
        <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
          {/* content 1 */}
          <div className="relative rounded-md overflow-hidden">
            <img className="hover:scale-125 transition-all duration-[2000ms] origin-top" src={'https://coihsan.github.io/profile/assets/jhondoe-hero.webp'} alt=""/>
            <div className="absolute bottom-0 right-0 rounded-t-md flex items-center gap-2 bg-zinc-800 p-2">
              <a className="text-sm flex items-center gap-2" href="#"><img className="w-4" src={github} alt=""/>Get Code</a>
              <a className="text-sm flex items-center gap-2" href="#"><img className="w-4" src={preview} alt=""/>Live Demo</a>
            </div>
          </div>
          {/* content 2 */}
          <div className="relative rounded-md overflow-hidden">
          <img className="hover:scale-125 transition-all duration-[2000ms] origin-top" src={'https://coihsan.github.io/profile/assets/Mack-Smith-Resume-2023.webp'} alt=""/>
          <div className="absolute bottom-0 right-0 rounded-t-md flex items-center gap-2 bg-zinc-800 p-2">
              <a className="text-sm flex items-center gap-2" href="#"><img className="w-4" src={github} alt=""/>Get Code</a>
              <a className="text-sm flex items-center gap-2" href="#"><img className="w-4" src={preview} alt=""/>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Projects