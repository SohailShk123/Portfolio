import React from 'react'
import pic from '../assets/pic.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.jpg'
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
  return (
    <div  className='flex justify-center items-center text-center md:text-start h-[90vh] mx-auto mb-5 mt-16 '>
      <div className=' flex flex-col '>
      <div className=' flex flex-col-reverse md:flex-row items-center md:items-start justify-between md:space-x-24'>
        <div className='space-y-5 '>
          <h1 className='text-5xl font-bold'>Front-End React <br /> Developer 👋 </h1> 
          <p className='text-sm font-semibold'>Hi, I'm Sohail Shaikh. A passionate Front-end React <br /> Developer based in Nanded, Maharashtra.📍</p>

          <SocialIcon url="https://github.com/SohailShk123" fgColor='black' bgColor='transparent' />
            <SocialIcon url="https://www.linkedin.com/in/sohail-shaikh-931b7b234/" fgColor='black' bgColor='transparent' />
            <SocialIcon url="https://www.instagram.com/sohail_shaikh_43/" fgColor='black' bgColor='transparent' />
        </div>
        <div>
        <img src={pic} 
        className='h-52 w-52  mb-14 border-2 border-black rounded-full md:rounded-3xl'
        alt="img" />
        </div>
      </div>
      <div className='flex item-center mt-12 p-1 space-x-8 md:space-x-16'>
        <p className='md:mr-5 font-bold text-sm'>Tech Stack :</p>
         <img className='h-6' src={html} alt="html.img" />
         <img className='h-6' src={css} alt="html.img" />
         <img className='h-6' src={js} alt="html.img" />
         <img className='h-6' src={react} alt="html.img" />
         <img className='h-6' src={tailwind} alt="html.img" />
      </div>
    </div>
    </div>
  )
}

export default Hero