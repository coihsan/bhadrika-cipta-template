import { useState } from 'react'

function Contact(){
  return (
    <div className="section relative mb-24 ">
     <div className="container">
          
        <div className="flex justify-between items-center max-[600px]:flex-col ">
        <h3 className="text-3xl w-4/5 leading-none mb-5 ">If my profile suits your objectives, i would welcome the chance to be a part of your team!</h3>
            <a className="callToAction w-max h-max" target="_blank" href="https://t.me/contactihsan"><i class="fa-solid fa-arrow-right"></i> Start a Project</a>
        </div>
        <div className="mb-5 mt-12 w-full h-px bg-zinc-800"></div>
        <div className="flex justify-between items-center max-[600px]:flex-col">
        <p>© 2023 ALL right Reserved to <strong>coihsan</strong></p>
        <div className="social-icon flex items-center gap-5 justify-center max-[600px]:justify-start mt-5">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a href="#"><i class="fa-brands fa-codepen"></i></a>
        </div>
        </div>
     </div>
     
      </div>
  )
}

export default Contact