import { useState } from 'react'

function Contact(){
  return (
    <>
     <div className="container">
        <div className=" flex flex-col">
        <h1 className="text-5xl font-bold max-[470px]:text-4xl">Let's Get Started</h1>
          <h3 className="text-3xl w-4/5 max-[600px]:w-full leading-none mb-5 mt-5 ">If my profile suits your objectives, i would welcome the chance to be a part of your team!</h3>
          <a className="callToAction w-max h-max flex items-center gap-3 px-5" target="_blank" href="#"><i className="fa-brands fa-telegram text-[52px] absolute border -top-1 -left-1 text-sky-600 bg-zinc-50 rounded-full"></i> <span className="pl-9 ">Hello Bhadrika 👋🏻</span></a>
        </div>
        
        </div>
        <div className="mt-[130px] w-full h-px bg-zinc-800"></div>
     
      </>
  )
}

export default Contact
