import React from 'react'
import { BeakerIcon, ChartBarIcon, ChartPieIcon, ChatAltIcon, CubeIcon, DatabaseIcon } from '@heroicons/react/outline';

const Services = () => {

  const items = [
    { id: 1, icon: () => <BeakerIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, icon: () => <ChartBarIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 3, icon: () => <ChartPieIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 4, icon: () => <ChatAltIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 5, icon: () => <CubeIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 6, icon: () => <DatabaseIcon className='w-12 text-black-500' />, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  return (
    <div className='py-8 lg:py-16'>
      <div className="container-block">
        <h2 className="titles mb-1">Servicios</h2>
        <span className='separator mb-4 lg:mb-10 md:mb-5'></span>
        <div className="grid grid-cols-6 gap-2 md:gap-3 lg:gap-4">
          {
            items.map((item) => (
              <div 
                className="col-span-3 md:col-span-2 lg:col-span-1 shadow-xl rounded-md flex-col bg-gray-200 py-3 px-2 text-center" key={item.id}
              >
                <div className='flex justify-center'>
                  {item.icon()}
                </div>
                <p className='text-sm mt-2'>{item.body}</p>
              </div>
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default Services;