import { useState } from 'react'


function Projects(){
  return (
    <div className="section">
      <div className="container">
      <h1 className="text-5xl mb-8 font-bold">Projects</h1>
        <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
          {/* content 1 */}
          <div className="relative rounded-md overflow-hidden">
            <img src={'https://coihsan.github.io/profile/assets/jhondoe-hero.webp'} alt=""/>
          </div>
          {/* content 2 */}
          <div className="relative rounded-md overflow-hidden">
          <img src={'https://coihsan.github.io/profile/assets/Mack-Smith-Resume-2023.webp'} alt=""/>
          </div>
        </div>
      <div className="line-separator-hero mb-separator">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Projects