import React from 'react'
import p1 from '../assets/p1.png'
import { SocialIcon } from 'react-social-icons';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import {data} from '../constant'
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  return (
    <>
    {data?.map((item) =>(
      <div  key={item.id} className={`  flex items-center justify-center relative mx-auto max-w-2xl text-center mb-1 ${item.id == 1 } h-screen ` }>
      {item.id == 1 && <p className='absolute top-20 md:top-24 tracking-[12px] text-gray-400'>PROJECT</p>}
        <div className='flex flex-col md:flex-row lg:space-x-12 md:px-5'>
        <div className='w-[400px] mx-auto'>
          <img src={item.img} className='h-auto w-full mb-12 md:mb-0 object-contian rounded-lg mx-auto mt-8 md:mt-5' alt="porjectimg" />
        </div>
        <div className='w-[350px]  mx-auto space-y-6 md:ml-10 '>
          <h3 className='font-bold'>{item.title}</h3>
          <p className='text-sm '>{item.description}</p>
          <p className='font-bold space-x-10'><span>React</span><span>Tailwind CSS</span></p>
          <div className='flex items-center space-x-10 justify-center font-semibold'>
            <h4>Code<SocialIcon url={item.codeLink} fgColor='black' bgColor='transparent' /></h4>
            <p className='flex cursor-pointer'
            ><Link to={item.demoUrl}>Live Demo</Link><ArrowTopRightOnSquareIcon className="h-6 w-6 " /></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default Projects
