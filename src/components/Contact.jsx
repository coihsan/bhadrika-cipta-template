import { useState } from 'react'

function Contact(){
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-[#4e6eff0e] py-14">
     <div className="container">
          
        <div className=" flex flex-col">
        <h1 className="text-5xl font-bold max-[470px]:text-4xl">Let's Get Started</h1>
          <h3 className="text-3xl w-4/5 max-[600px]:w-full leading-none mb-5 mt-5 ">If my profile suits your objectives, i would welcome the chance to be a part of your team!</h3>
          <a className="callToAction w-max h-max flex items-center gap-3 px-5" target="_blank" href="https://t.me/contactihsan"><i class="fa-brands fa-telegram text-[52px] absolute border -top-1 -left-1 text-sky-600 bg-zinc-50 rounded-full"></i> <span className="pl-9 ">Hello Ihsan 👋🏻</span></a>
        </div>
        
        </div>
        <div className="mt-[70px] mb-[30px] w-full h-px bg-zinc-800"></div>
        <div className="flex justify-between items-center max-[600px]:flex-col container">
        <p>© 2023 ALL right Reserved to <strong>coihsan</strong></p>
        <div className="social-icon flex items-center gap-5 justify-center max-[600px]:justify-start">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a target="" href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a target="_blank" href="https://codepen.io/coihsan"><i class="fa-brands fa-codepen"></i></a>
        </div>
     </div>
     
      </div>
  )
}

export default Contact
