import React from 'react'
import ContactForm from './contact_form';
import Map from './map';

const Contact = () => {
  return (
    <div className='py-8 lg:py-16'>
      <div className="container-block">
        <h2 className="titles">Contacto</h2>
        <span className='separator'></span>

        <div className="grid grid-cols-12 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="titles mt-10">Escríbenos</h2>
            <p className='text-red-500 font-medium'>Lorem ipsum lorem lorem ipsum bacon ipsum</p>
            <ContactForm />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Map />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
