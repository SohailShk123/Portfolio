import React from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Contact = () => {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center relative mx-auto max-w-2xl text-center'>
      <p className='absolute top-28 tracking-[12px] text-gray-400'>CONTACT</p>
      <p className=' absolute top-48 font-bold text-black'>Don't be shay! Hit me up!👇</p>
      <div className='flex space-x-14 md:space-x-20 flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row'>

        <div className='flex space-x-5 items-center'>
          <MapPinIcon className="h-6 w-6 text-blue-600" />
          <p className='text-left'>
            <span className='font-bold'>Location</span> <br />
            <span className='text-gray-500'>Nanded, Maharashtra.</span>
          </p>
        </div>
        <div className='flex space-x-5 items-center'>
          <EnvelopeIcon className="h-6 w-6 text-blue-600" />
          <p className='text-left'>
            <span className='font-bold'>Email</span> <br />
            <span className='text-gray-500'>sohailshaikh2636@gmail.com</span>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Contact