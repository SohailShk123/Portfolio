import React from 'react'
import lap from '../assets/lap.jpg'
import { text1 } from '../constant'

const About = () => {
  return (
    <div  className='h-screen flex items-center justify-center relative mx-auto max-w-2xl text-center '>
      <p className='absolute top-24 tracking-[12px] text-gray-400'>ABOUT ME</p>
      <div className='flex flex-col justify-between item-center md:flex-row space-y-5 p-5'>
       
        <div className='w-[400px] mx-auto'>
        <img src={lap} className='h-auto w-full mt-20 md:mt-0 object-contian rounded-lg mx-auto ' alt="aboutimg md:pl-5" />
        </div>
      
        <div className='w-[400px] flex flex-col text-center md:text-left md:ml-10 pb-5 space-y-3'>
        
          <h3 
          className='font-bold text-lg '
          >A dedicated front-end developer based in Nanded,Maharashtra📍</h3>
          <p
          className='text-xs  '
          >{text1}</p>

        </div>
      </div>
    </div>
  )
}

export default About