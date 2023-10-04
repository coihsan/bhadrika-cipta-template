import React from 'react';
// import Navbar from "../components/Navbar";

const LandingPageServices = () =>{
  return (
    <section id="services">
      {/* <Navbar/> */}
      <div className="section max-[600px]:w-full">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
          {/* content 1 */}
          <div className="relative overflow-hidden">
          <img className="hover:scale-[1.1] delay-0 transition-all duration-[1000ms] ease-in origin-top" src={'https://coihsan.github.io/profile/assets/jhondoe-hero.webp'} alt=""/>
            <div className="absolute bottom-0 right-0 flex items-center backdrop-blur-md bg-white/10 backdrop-opacity-10 backdrop-invert">
              <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={github} alt=""/>Get Code</a>
              <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={preview} alt=""/>Live Demo</a>
            </div>
          </div>
          {/* content 2 */}
          <div className="relative overflow-hidden">
          <img className="hover:scale-[1.1] delay-0 transition-all duration-[1000ms] ease-in origin-top" src={'https://coihsan.github.io/profile/assets/Mack-Smith-Resume-2023.webp'} alt=""/>
          <div className=" absolute bottom-0 right-0 flex items-center backdrop-blur-md bg-white/10 backdrop-opacity-10 backdrop-invert">
              <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={github} alt=""/>Get Code</a>
              <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={preview} alt=""/>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default LandingPageServices