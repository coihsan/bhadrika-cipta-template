import { useState } from 'react'

function Contact(){
  return (
    <div className="section m-auto">
     <div className="container mb-24 flex max-[600px]:flex-col ">
          
          <div className="flex flex-col">
          <h3 className="text-3xl leading-none w-3/5 mb-5 max-[600px]:w-full">If my profile suits your objectives, i would welcome the chance to be a part of your team!</h3>
            <a className="callToAction w-max" href="#"><i class="fa-solid fa-arrow-right"></i> Start a Project</a>
            </div>
        <div className="social-icon flex items-center gap-5 justify-center max-[600px]:justify-start mt-5">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a href="#"><i class="fa-brands fa-codepen"></i></a>
        </div>
     </div>
      </div>
  )
}

export default Contact