import { Code } from '@phosphor-icons/react'
import React from 'react'

const Skills = () => {
    return (
        <>
            <div id="about" className='flex gap-15 mb-60'>
                <div className='w-[800px] ml-30'>
                    <h1 className='" mb-5 font-bold-800 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"'>About Me</h1>
                        <p className='mb-5'>
                          <span className=' text-white font-extrabold text-5xl'>  Passionate about creating </span><p className='" text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"'>Digital Experiences</p>
                        </p>
                    
                    <div className='text-[#547790]'>
                       <p> I'm a frontend developer with a keen eye for detail and a passion for building exceptional web applications. With expertise in React, TypeScript, and modern CSS frameworks, I transform ideas into responsive, performant, and accessible interfaces. </p>
                       <br />


                       <p> My journey in web development started with curiosity and has evolved into a dedicated pursuit of excellence. I believe in writing code that not only works but is also elegant and maintainable.</p> 
                       <br />

                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                    </div>
                </div>

                <div className='mr-30 text-white grid grid-cols-2 mt-20 gap-10'>
                    <div > 
                      <div className="w-12 h-12 flex  items-center justify-center rounded-xl bg-[#1f3a3a]">
                        <Code size={24} className="text-[#6fe7dd]" />
                      </div>
                    <span className='font-bold text-lg'>clean code </span>
                    <p className='text-[#547792] text-sm'>Writing maintainable, scalable, and well-documented code</p>
                    </div>

                     <div> 
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f3a3a]">
                        <Code size={24} className="text-[#6fe7dd]" />
                      </div>
                    <span className='font-bold text-lg'>UI/UX Design </span>
                    <p className='text-[#547792] text-sm'>Creating intuitive and visually appealing interfaces</p>
                    </div>

                     <div> 
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f3a3a]">
                        <Code size={24} className="text-[#6fe7dd]" />
                      </div>
                    <span className='font-bold text-lg'>Performance </span>
                    <p className='text-[#547792] text-sm'>Optimizing for speed and smooth user experiences</p>
                    </div>

                     <div> 
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f3a3a]">
                        <Code size={24} className="text-[#6fe7dd]" />
                      </div>
                    <span className='font-bold text-lg'>Collaboration  </span>
                    <p className='text-[#547792] text-sm'>Working effectively in agile team environments</p>
                    </div>

                </div>
 
            </div>
        </>
    )
}

export default Skills