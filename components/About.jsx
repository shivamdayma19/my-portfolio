import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react'

const About = () => {
    const words = [
      "Frontend Developer",
      "React Specialist",
      "UI/UX Enthusiast",
      "Problem Solver"
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      let charIndex = 0;

      const interval = setInterval(() => {
        setText(words[index].slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === words[index].length) {
          clearInterval(interval);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % words.length);
            setText("");
          }, 1200);
        }
      }, 80);

      return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            <div className='text-white text-center mb-60 '>
                <span className='"font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"'>Hello i'm </span>
                <h1 className=' font-extrabold text-[90px]'>Shivam <span className='"font-bold-800 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"'>Dayma</span></h1>
                <div className="text-[#547792] flex justify-center text-3xl h-10 mb-8 mt-4">
                  <p className="tracking-wide ">{text}</p>
                </div>
                <div className='max-w-xl text-[#547792] text-lg mx-auto mb-8'>
                    Crafting beautiful, responsive, and user-friendly web experiences with modern technologies. Passionate about clean code and pixel-perfect designs.
                </div>

                <div className='flex justify-center mb-15 gap-5'>
                    <button className="border py-3 px-10 rounded-xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">View my work</button>
                    <button className='border-2 border-cyan-400 py-3 px-10 rounded-xl '>Get in touch</button>
                </div>

                <div className='flex text-gray-500  justify-center gap-8 '>
                    <button><GithubLogoIcon  size={25} /></button>
                    <button><LinkedinLogoIcon size={25} /> </button>
                    <button><EnvelopeIcon  size={25} /></button>
                </div>


            </div>
        </>
    )
}

export default About