import { useState } from 'react'

function Hero2(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-5xl mb-8 font-bold">My Skills</h1>
        {/* start content */}
        <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center bg-zinc-900">
          <span className="text-5xl">👨🏼‍💻 </span>
          <h3 className="text-3xl">Front-End</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
        <span className="text-5xl">😍</span>
        <h3 className="text-3xl">Digital Marketing</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl">🚀</span>
          <h3 className="text-3xl">SEO</h3>
        </div>
        </div>
        {/* end content */}
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </section>
  )
}
export default Hero2