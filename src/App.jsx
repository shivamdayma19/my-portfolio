import { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'



function App() {


  return (
    <>
    <div className=" w-screen bg-[radial-gradient(circle_at_center,_#2f2f2f_0%,_#1f1f1f_30%,_#000000_70%)]">
      <Header />
      <About />
      <Skills />
    </div>
    </>
  )
}

export default App
