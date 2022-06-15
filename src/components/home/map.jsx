import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react'

const Map = () => {
  return (
    <div className='bg-black-600 text-white mt-8 md:mt-0'>
      <h2 className="titles text-white border-b-4 border-red-500 p-4 text-center">Ubicación</h2>

      <img src="./location2.png" className="p-4 rounded-md block" alt="" />

      <div className="space-y-2 p-4">
        <p className="text-white flex items-center">
          <span className='inline-flex items-baseline mr-3'>
            <PhoneIcon className='w-8 text-red-500' />
          </span>
          <span>33 1234 5678</span>
        </p>
        <p className="text-white flex items-center">
          <span className='inline-flex items-baseline mr-3'>
            <MailIcon className='w-8 text-red-500' /> 
          </span>
          <span>info@emprend.com</span>
        </p>
        <p className="text-white flex items-center">
          <span className="inline-flex items-baseline mr-3">
            <LocationMarkerIcon className='w-8 text-red-500' />
          </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
        </p>
      </div>

    </div>
  )
}

export default Map; 
