import { useState } from 'react'
import arrow from '../assets/arrow.svg';
import laptop from '../assets/laptop.svg';
import ads from '../assets/ads.svg';
import design from '../assets/design.svg';
import search from '../assets/search.svg';
function Offering(){
  return (
    <div className="section m-auto">
      <div className="container">
        <h1 className="text-5xl mb-8 font-bold">Offering</h1>
        <div className="overflow-hidden w-full">
        <div className="overflow-scroll scroll-smooth card-offering-wrapper">
        <div className="flex gap-5 w-full py-10">
          <a href="/landing-pages-services.jsx" className="shrink-0 basis-96 relative w-full border border-zinc-700 bg-gradient-to-tl from-zinc-900 to-zinc-950 p-10 rounded-md hover:border-zinc-200 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-amber-500 via-fuchsia-500 to-indigo-800 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-zinc-950 rounded-md" src={laptop} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Custom Landing Page</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </a>
          <a href="#" className="shrink-0 basis-96 relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors ">
            <div className="p-0.5 bg-gradient-to-br from-lime-500 via-orange-500 to-blue-800 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-zinc-950 rounded-md" src={ads} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Google &amp; Social Media Ads</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </a>
          <a href="#" className="shrink-0 basis-96 relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-sky-500 via-fuchsia-500 to-indigo-800 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-zinc-950 rounded-md" src={design} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Social Media Content</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </a>
          <a href="" className="shrink-0 basis-96 relative w-full border border-zinc-700 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-200 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-lime-500 via-rose-500 to-sky-800 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-zinc-950 rounded-md" src={search} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Search Engine Optimization</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a className="absolute bottom-5 right-5" href="#"><img src={arrow} alt=""/></a>
          </a>
        </div>
        </div>
      </div>
        <div className="line-separator-hero mb-separator">
            <span></span>
        </div>
      </div>
    </div>
  )
}

export default Offering