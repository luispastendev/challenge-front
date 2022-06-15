import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react'

const Us = () => {
  return (
    <div className='bg-gray-500 py-8 lg:py-16'>
      <div className="container-block">
        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-2 lg:col-span-1'>
            <h2 className="titles mb-1">Nosotros</h2>
            <span className='separator'></span>
            <div className='my-4'>
              <p className="text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum maiores modi voluptates quidem cumque repellendus excepturi dolorum, ut, vitae consectetur quas nemo totam voluptate id eum nobis. Repellendus, id!</p>
              <p className="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam iusto ipsam exercitationem mollitia id, voluptatum minus porro sunt, in neque sequi! Aspernatur inventore tempora quae, quod veniam officiis porro!</p>
            </div>
            <button
              type="button"
              className="button-primary mt-2"
            >
              <ArrowRightIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Button text
            </button>
          </div>
          <div className='col-span-2 lg:col-span-1 hidden lg:block relative bg-cover2 bg-cover bg-center '>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Us;