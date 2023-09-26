import { useState } from 'react'
import smile from '../assets/smile.svg';

function Skills(){
  return (
    <div className="section m-auto" id="Skills">
      <div className="container">
      <h1 className="text-5xl mb-8 font-bold">Skills</h1>
      {/* content */}
      <div className="flex items-center">
          <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-md p-px">
            <div className="p-5 bg-neutral-900 rounded-md">
              {/* skills header */}
              <div className="mb-2" >
                <img className="mb-4 w-14" src={smile} alt=""/>
                <h3 className="text-3xl font-bold">Web / SEO</h3>
                <p>I am a web designer with experience in creating landing pages using HTML, CSS, and JavaScript.</p>
              </div>
              {/* skills header */}
              {/* Progress */}
              <div className="grid gap-3">
                <h5>Most Used Languages</h5>
                <div className="flex items-center relative w-full overflow-hidden h-2.5 rounded-md">
                  <span className="w-2/5 bg-orange-500 h-2.5"></span>
                  <span className="w-2/5 bg-blue-500 h-2.5"></span>
                  <span className="w-2/5 bg-lime-500 h-2.5"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="relative font-bold text-sm">HTML</span>
                  <span className="relative font-bold text-sm">CSS</span>
                  <span className="relative font-bold text-sm">JS</span>
                </div>
              </div>
              {/* Progress */}
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

export default Skills