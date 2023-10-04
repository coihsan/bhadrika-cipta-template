import React from "react";
const Footer = () =>{
  return(
    <div>
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

export default Footer