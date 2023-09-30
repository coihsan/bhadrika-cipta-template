import { useState } from 'react'
import smile from '../assets/smile.svg';
import webdev from '../assets/webdev.svg';
import js from '../assets/js.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import react from '../assets/react.svg';
import vite from '../assets/vite.svg';
import photoshop from '../assets/photoshop.svg';
import astroGradient from '../assets/astro-gradient.svg';
import illustrator from '../assets/illustrator.svg';
import AE from '../assets/after-effects.svg';
import dot from '../assets/triple-dot.svg';

function Skills(){
  return (
    <div className="section m-auto max-[600px]:w-full" id="Skills">
      <div className="container">
      <div className="flex items-center gap-5 mb-8">
        <span className="w-full h-0.5 bg-gradient-to-l from-zinc-500 to-zinc-950 "></span>
        <h1 className="text-5xl text-center font-bold">Skills</h1>
        <span className="w-full h-0.5 bg-gradient-to-r from-zinc-500 to-zinc-950"></span>
      </div>
      {/* content */}
      <div className="grid skills-card gap-3 grid-cols-2 max-[768px]:grid-cols-1">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-700 rounded-md p-0.5">
            <div className="p-10 max-[600px]:p-5 bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-950 rounded-md relative cards">
              {/* skills header */}
              <div className="mb-6" >
                <img className="w-20 mb-5 m-auto" src={smile} alt=""/>
                <h3 className="text-3xl font-bold text-center mb-3">Digital {'{Marketing}'}</h3>
                <p className="text-center">I have experience in the marketing department, with a wide range of job duties and events.</p>
              </div>
              {/* skills header */}
              {/* Progress */}
              <div className="grid gap-3">
                <h5 className="font-bold text-lg">Common Job</h5>
                <div className="flex items-center relative w-full overflow-hidden h-2.5 rounded-md">
                  <span className="w-3/5 bg-orange-500 h-2.5"></span>
                  <span className="w-1/5 bg-blue-500 h-2.5"></span>
                  <span className="w-32 bg-yellow-500 h-2.5"></span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-indicator relative before:bg-orange-500 font-bold text-sm">Design 60%</span>
                  <span className="text-indicator relative before:bg-blue-500 font-bold text-sm">Video 10%</span>
                  <span className="text-indicator before:bg-yellow-500 relative font-bold text-sm">Other 30%</span>
                </div>
              </div>
              {/* Progress */}
              <div>
                <h5 className="font-bold text-lg  w-full border-b-[1px] border-zinc-700 pb-1">Skills &amp; Tool's</h5>
                <ul className=" flex items-center flex-wrap mt-3 gap-2">
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Google Ads</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Meta Ads</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Social Media Content</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Event</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">E-Commerce / Marketplace</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Copywriting</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Pay-Per-Click</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Video Creation</li>
                  <img src={dot} alt=""/>
                </ul>
                <div className="mt-4 flex items-center flex-wrap gap-3">
                  <img className="w-12" src={photoshop} alt=""/>
                  <img className="w-12" src={illustrator} alt=""/>
                  <img className="w-12" src={AE} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-700 rounded-md p-0.5">
            <div className="p-10 max-[600px]:p-5 bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-950 rounded-md relative cards">
              {/* skills header */}
              <div className="mb-6" >
                <img className="w-20 mb-5 m-auto" src={webdev} alt=""/>
                <h3 className="text-3xl font-bold text-center mb-3">Web / SEO</h3>
                <p className="text-center">I am a web designer with experience in creating landing pages using HTML, CSS, and JavaScript.</p>
              </div>
              {/* skills header */}
              {/* Progress */}
              <div className="grid gap-3">
                <h5 className="font-bold text-lg">Most Used Languages</h5>
                <div className="flex items-center relative w-full overflow-hidden h-2.5 rounded-md">
                  <span className="w-2/5 bg-orange-500 h-2.5"></span>
                  <span className="w-3/5 bg-blue-500 h-2.5"></span>
                  <span className="w-2/5 bg-yellow-500 h-2.5"></span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-indicator relative before:bg-orange-500 font-bold text-sm">HTML 20%</span>
                  <span className="text-indicator relative before:bg-blue-500 font-bold text-sm">CSS 60%</span>
                  <span className="text-indicator relative before:bg-yellow-500 font-bold text-sm">JavaScript 20%</span>
                </div>
              </div>
              {/* Progress */}
              <div>
                <h5 className="font-bold text-lg w-full border-b-[1px] border-zinc-700 pb-1">Skills &amp; Tool's</h5>
                <ul className="flex items-center flex-wrap mt-3 gap-2">
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">On-Page SEO</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Off-Page SEO</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Yoast</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">SEMRush</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Landing Page Creation</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Search Console</li>
                  <li className="text-sm py-1 px-3 bg-zinc-800 rounded">Google Analytics</li>
                  <img src={dot} alt=""/>
                </ul>
                <div className="mt-4 flex items-center flex-wrap gap-3">
                  <img className="w-11" src={js} alt=""/>
                  <img className="w-10" src={css} alt=""/>
                  <img className="w-10" src={html} alt=""/>
                  <img className="w-12" src={react} alt=""/>
                  <img className="w-12" src={vite} alt=""/>
                  <img className="w-10" src={astroGradient} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Skills