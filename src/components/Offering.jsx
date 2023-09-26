import { useState } from 'react'
import arrow from '../assets/arrow.svg';
function Offering(){
  return (
    <div className="section m-auto">
      <div className="container">
        <h1 className="text-5xl mb-8 font-bold">Offering</h1>
        <div className="overflow-hidden w-full">
        <div className="overflow-scroll scroll-smooth">
        <div className="grid grid gap-5 w-full">
          <div className="w-full border p-10 rounded-md">
            <span>01</span>
            <h1 className="text-3xl">Custom Landing Page</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="w-full border p-10 rounded-md">
            <span>02</span>
            <h1 className="text-3xl">Google &amp; Social Media Ads</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="w-full border p-10 rounded-md">
            <span>03</span>
            <h1 className="text-3xl">Google &amp; Social Media Ads</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a href="#"><img src={arrow} alt=""/></a>
          </div>
          <div className="w-full border p-10 rounded-md">
            <span>04</span>
            <h1 className="text-3xl">Google &amp; Social Media Ads</h1>
            <p>Create effective landing pages for your marketing campaigns, product launches, affiliate programs, and support A/B Testing.</p>
            <a href="#"><img src={arrow} alt=""/></a>
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