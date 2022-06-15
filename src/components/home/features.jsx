import React from 'react'
import { CloudIcon, CreditCardIcon, DeviceMobileIcon } from '@heroicons/react/outline';



const Features = () => {

  const features = [
    { id: 1, icon: () => <CloudIcon className='w-12 text-red-500' />, title: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor veritatis nulla numquam dolorem repudiandae, voluptatum hic perspiciatis laborum eligendi consectetur distinctio, enim rerum atque tempora veniam eaque odit aliquam.' },
    { id: 2, icon: () => <CreditCardIcon className='w-12 text-red-500' />, title: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolor voluptatem ab sunt. Beatae laudantium perspiciatis veniam sed vitae architecto, ut dicta odio eligendi mollitia ea, sequi, harum animi inventore?' },
    { id: 3, icon: () => <DeviceMobileIcon className='w-12 text-red-500' />, title: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolores nostrum porro animi ea ex velit architecto ullam, quos itaque, numquam explicabo quod necessitatibus exercitationem aut pariatur, ad facilis eaque!' }
  ];

  return (
    <div className='py-8 lg:py-16'>
      <div className="container-block">
        <div className='grid grid-cols-12 lg:gap-8'>
          <div className='col-span-12 lg:col-span-8'>
            <h2 className="titles">Características</h2>
            <span className='separator'></span>
            <div className="my-6 lg:my-8 space-y-6">
              {
                features.map(feature => (
                  <div className='flex' key={feature.id}>
                    <div className='pr-5'>
                      {feature.icon()}
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-base text-lg text-red-500 font-semibold'>{ feature.title }</h4>
                      <p>{feature.body}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='md:col-span-4 hidden lg:block relative bg-cover3 bg-bottom'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
