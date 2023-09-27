import { useState } from 'react'
import arrow from '../assets/arrow.svg';
function Offering(){
  return (
    <div className="section m-auto">
      <div className="container">
        <h1 className="text-5xl mb-8 font-bold">Offering</h1>
        <div className="overflow-hidden w-full">
        <div className="overflow-scroll scroll-smooth">
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors">
            <div className="p-px bg-gradient-to-br from-amber-500 via-fuchsia-500 to-indigo-800 rounded-md mb-4 w-max">
              <div className="py-5 px-6 flex font-bold bg-zinc-950 rounded-md"><i class="fa-solid fa-laptop-code"></i></div>
            </div>
            <h1 className="text-3xl font-bold my-2">Custom Landing Page</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors ">
            <div className="p-px bg-gradient-to-br from-lime-500 via-orange-500 to-blue-800 rounded-md mb-4 w-max">
              <div className="py-5 px-6 flex font-bold bg-zinc-950 rounded-md">02</div>
            </div>
            <h1 className="text-3xl font-bold my-2">Google &amp; Social Media Ads</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors">
            <div className="p-px bg-gradient-to-br from-amber-500 via-fuchsia-500 to-indigo-800 rounded-md mb-4 w-max">
              <div className="py-5 px-6 flex font-bold bg-zinc-950 rounded-md">03</div>
            </div>
            <h1 className="text-3xl font-bold my-2">Social Media Content</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors">
            <div className="p-px bg-gradient-to-br from-amber-500 via-fuchsia-500 to-indigo-800 rounded-md mb-4 w-max">
              <div className="py-5 px-6 flex font-bold bg-zinc-950 rounded-md">04</div>
            </div>
            <h1 className="text-3xl font-bold my-2">Search Engine Optimization</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </div>
        </div>
        </div>
      </div>
        <div className="line-separator-hero">
            <span></span>
        </div>
      </div>
    </div>
  )
}

export default Offering