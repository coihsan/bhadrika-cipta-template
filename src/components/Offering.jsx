import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import arrow from '../assets/arrow.svg';
import laptop from '../assets/laptop.svg';
import ads from '../assets/ads.svg';
import design from '../assets/design.svg';
import search from '../assets/search.svg';
import sparkless from '../assets/sparkless.svg';

function Offering(){
  const [count, setCount] = useState(0);

  return (
    <div className="section m-auto max-[600px]:w-full">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <img className="w-9" src={sparkless} alt=""/>
          <h1 className="text-5xl font-bold">Offering</h1>
        </div>
        <div className="overflow-hidden w-full">
        <div className=" card-offering-wrapper">
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-3 w-full">
          <div  className="cards shrink-0 basis-96 relative w-full border border-zinc-800 bg-gradient-to-tl from-zinc-900 to-zinc-950 p-10 rounded-md hover:border-zinc-500 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-amber-500 via-fuchsia-500 to-indigo-600 rounded-md mb-4 w-max">
            <img className=" py-3 px-3 flex bg-gradient-to-tl from-zinc-950 via-zinc-800 to-zinc-900 rounded-md" src={laptop} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Build a Web with Astro</h1>
            <p className="text-zinc-400">I can help you build a web or landing page with astro.build and also support A/B Testing.</p>
            <a href="/Services.jsx" to="/Services" className="bg-gradient-to-l to-zinc-700 border border-zinc-700 px-5 py-2 w-max rounded-full mt-5 flex gap-3"><img src={arrow} alt=""/> Learn more</a>
          </div>
          {/* END */}
          <a href="/services" className="cards shrink-0 basis-96 relative w-full border border-zinc-800 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-500 transition-colors ">
            <div className="p-0.5 bg-gradient-to-br from-lime-500 via-orange-500 to-blue-500 rounded-md mb-4 w-max">
            <img className="py-3 px-3 flex  bg-gradient-to-tl from-zinc-950 via-zinc-800 to-zinc-900 rounded-md" src={ads} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Google &amp; Social Media Ads</h1>
            <p className="text-zinc-400">Reach a wider audience with targeted ads that are relevant to the target market with Google or Meta Ads.</p>
            <a className="bg-gradient-to-l to-zinc-700 border border-zinc-700 px-5 py-2 w-max rounded-full mt-5 flex gap-3" href="#"><img src={arrow} alt=""/> Learn more</a>
          </a>
          <a href="#" className="cards shrink-0 basis-96 relative w-full border border-zinc-800 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-500 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-sky-500 via-fuchsia-500 to-pink-500 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-gradient-to-tl from-zinc-950 via-zinc-800 to-zinc-900 rounded-md" src={design} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Social Media Content</h1>
            <p className="text-zinc-400">Design images and video variants for your brand on social media, and also create Engagement Campaigns.</p>
            <a className="bg-gradient-to-l to-zinc-700 border border-zinc-700 px-5 py-2 w-max rounded-full mt-5 flex gap-3" href="#"><img src={arrow} alt=""/> Learn more</a>
          </a>
          <a href="" className="cards shrink-0 basis-96 relative w-full border border-zinc-800 p-10 rounded-md bg-gradient-to-tl from-zinc-900 to-zinc-950 hover:border-zinc-500 transition-colors">
            <div className="p-0.5 bg-gradient-to-br from-teal-500 via-rose-500 to-indigo-500 rounded-md mb-4 w-max">
            <img className="text-2xl py-3 px-3 flex font-bold bg-gradient-to-tl from-zinc-950 via-zinc-800 to-zinc-900 rounded-md" src={search} alt=""/>
            </div>
            <h1 className="text-3xl font-bold my-2">Search Engine Optimization</h1>
            <p className="text-zinc-400">I will optimize your website for relevant keywords, code, structure and content appropriate to the ranking factors.</p>
            <a className="bg-gradient-to-l to-zinc-700 border border-zinc-700 px-5 py-2 w-max rounded-full mt-5 flex gap-3" href="#"><img src={arrow} alt=""/> Learn more</a>
          </a>
        </div>
        </div>
      </div>
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Offering