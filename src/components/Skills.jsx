import { useState } from 'react'
import smile from '../assets/smile.svg';
import webdev from '../assets/webdev.svg';
import js from '../assets/js.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import react from '../assets/react.svg';
import vite from '../assets/vite.svg';
import figma from '../assets/figma.svg';
import tailwind from '../assets/tailwind.svg';
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
        <h1 className="text-5xl text-center font-bold max-[470px]:text-4xl">Skills</h1>
        <span className="w-full h-0.5 bg-gradient-to-r from-zinc-500 to-zinc-950"></span>
      </div>
      {/* content */}
      <div className="grid skills-card gap-3 grid-cols-2 max-[768px]:grid-cols-1">
          <div className="bg-gradient-to-b from-zinc-500 to-transparent rounded-md p-px">
            <div className="p-10 max-[600px]:p-5 bg-zinc-950 bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#4e6eff0e] rounded-md relative cards">
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
                  <span className="w-[20%] bg-amber-600 h-2.5"></span>
                  <span className="w-[60%] bg-blue-500 h-2.5"></span>
                  <span className="w-[20%] bg-yellow-500 h-2.5"></span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-indicator relative before:bg-amber-600 font-bold text-sm">HTML 20%</span>
                  <span className="text-indicator relative before:bg-blue-500 font-bold text-sm">CSS 60%</span>
                  <span className="text-indicator relative before:bg-yellow-500 font-bold text-sm">JavaScript 20%</span>
                </div>
              </div>
              {/* Progress */}
              <div>
                <h5 className="font-bold text-lg w-full border-b-[1px] border-zinc-700 pb-1">Skills &amp; Tool's</h5>
                <ul className="flex items-center flex-wrap mt-3 gap-2">
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">On-Page SEO</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Off-Page SEO</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Web-Blog</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">SEMRush</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Landing Page Creation</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Search Console</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Google Analytics</li>
                  <img src={dot} alt=""/>
                </ul>
                <div className="mt-4 flex items-center flex-wrap gap-3">
                  <img className="w-11" src={js} alt="javascript"/>
                  <img className="w-10" src={css} alt="css"/>
                  <img className="w-10" src={html} alt="html"/>
                  <img className="w-12" src={react} alt="react"/>
                  <img className="w-12" src={vite} alt="vite"/>
                  <img className="w-12" src={tailwind} alt="tailwind"/>
                  <img className="w-10" src={astroGradient} alt="astro"/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-zinc-500 to-transparent rounded-md p-px">
            <div className="p-10 max-[600px]:p-5 bg-zinc-950 bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#4e6eff0e] rounded-md relative cards">
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
                  <span className="w-[60%] bg-indigo-500 h-2.5"></span>
                  <span className="w-[10%] bg-pink-500 h-2.5"></span>
                  <span className="w-[30%] bg-lime-500 h-2.5"></span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-indicator relative before:bg-indigo-500 font-bold text-sm">Design 60%</span>
                  <span className="text-indicator relative before:bg-pink-500 font-bold text-sm">Video 10%</span>
                  <span className="text-indicator before:bg-lime-500 relative font-bold text-sm">Other 30%</span>
                </div>
              </div>
              {/* Progress */}
              <div>
                <h5 className="font-bold text-lg  w-full border-b-[1px] border-zinc-700 pb-1">Skills &amp; Tool's</h5>
                <ul className=" flex items-center flex-wrap mt-3 gap-2">
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Google Ads</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Meta Ads</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Social Media Content</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Event</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">E-Commerce / Marketplace</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Copywriting</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Pay-Per-Click</li>
                  <li className="text-sm py-1 px-3 border border-zinc-700 rounded">Video Creation</li>
                  <img src={dot} alt=""/>
                </ul>
                <div className="mt-4 flex items-center flex-wrap gap-3">
                  <img className="w-12" src={photoshop} alt="photoshop"/>
                  <img className="w-12" src={illustrator} alt="illustrator"/>
                  <img className="w-12" src={AE} alt="after-effects"/>
                  <img className="w-7" src={figma} alt="figma"/>
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
