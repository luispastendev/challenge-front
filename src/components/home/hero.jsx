import React from 'react'

const Hero = () => {
  return (  
    <div className="bg-cover bg-center">
      <div className='mx-auto  h-screen'>
        <div className="bg-black-900 w-full h-full flex justify-center items-center flex-col text-white opacity-80 leading-loose text-center">
          <h1 className="font-bold text-4xl lg:text-5xl underline decoration-red-500 underline-offset-4 decoration-4">¿TE GUSTA EMPRENDER?</h1>
          <p className="font-base text-lg lg:text-xl mt-1 lg:mt-3">Nosotros te ayudamos a hacerlo</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;