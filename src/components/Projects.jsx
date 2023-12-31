import React  from 'react'
import preview from '../assets/preview.svg';
import github from '../assets/github.svg';
import sparkless from '../assets/sparkless.svg';

const listProjects = [
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-1.jpg"
  },
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-2.png"
  },
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-3.jpg"
  },
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-4.png"
  },
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-5.png"
  },
  {
    imgUrl: "https://coihsan.github.io/iseng/assets/project-6.png"
  },
]

function Projects(){
  return (
    <div className="section max-[600px]:w-full">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex items-center gap-3">
          <img className="w-9" src={sparkless} alt=""/>
          <h1 className="text-5xl font-bold max-[470px]:text-4xl">Projects</h1>
        </div>
          <a className="hover:underline px-4 py-1 text-[14px] bg-zinc-800 rounded-full" href="#">Index</a>
        </div>
        <div className="grid grid-cols-3 gap-3 max-[600px]:grid-cols-1">
          {/* content 1 */}
          {listProjects.map((listProjects) =>(
            <div className="relative overflow-hidden">
              <img className="hover:scale-[1.1] delay-0 transition-all duration-[1000ms] ease-in origin-top" src={listProjects.imgUrl} alt=""/>
              <div className="absolute bottom-0 right-0 flex items-center backdrop-blur-md bg-white/10 backdrop-opacity-10 backdrop-invert">
                <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={github} alt=""/>Get Code</a>
                <a className="text-sm flex items-center gap-2 hover:bg-zinc-900 px-3 py-1" href="#"><img className="w-4" src={preview} alt=""/>Live Demo</a>
              </div>
          </div>
          ))}
        </div>
      </div>
      <div className="mb-separator w-full h-px bg-zinc-800"></div>
    </div>
  )
}

export default Projects