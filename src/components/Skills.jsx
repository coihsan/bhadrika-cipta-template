import { useState } from 'react'
import smile from '../assets/smile.svg';

function Skills(){
  return (
    <div className="section m-auto" id="Skills">
      <div className="container">
      <h1 className="text-4xl mb-8 font-bold">Skills</h1>
      {/* content */}
      <div className="flex items-center">
          <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-md p-px">
            <div className="p-5 bg-neutral-900 rounded-md">
              <div className="skills-header" >
                <img className="mb-4 w-14" src={smile} alt=""/>
                <h3 className="">Web Design</h3>
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

export default Skills