import React, {useState} from 'react'
import { useForm } from '../../hooks/useForm';
import Alert from './alert';


const ContactForm = () => {

  const [form, handleInputChange, setInputErrors,setInputValues, cleanForm] = useForm({
    name: {
      value: '',
      error: ''
    }, 
    email: {
      value: '',
      error: ''
    }, 
    phone: {
      value: '',
      error: ''
    }, 
    date: {
      value: '',
      error: ''
    }, 
    message: {
      value: '',
      error: ''
    }  
  });

  const { name, email, phone, date, message } = form;

  const [alert, setAlert] = useState({
    active: false,
    type: 'green',
    msg: 'Verifique el formato de los datos del fomulario',
    title: 'Error en formulario'
  });

  const submitForm = (ev) => {
    ev.preventDefault();
    if (name.value === '' || 
        email.value === '' ||
        phone.value === '' ||
        date.value === '' ||
        message.value === ''
    ) {
      setAlert({
        active: true,
        type: 'red',
        msg: 'Verifique el formato de los datos del fomulario',
        title: 'Error en formulario'
      });
    } else {
      setAlert({
        active: true,
        type: 'green',
        msg: 'Muchas gracias por contactar, nos comunicaremos contigo lo mas pronto posible',
        title: 'Mensaje enviado'
      });
      cleanForm();
    }
    setTimeout(() => {
      setAlert(alert => ({
        ...alert,
        active: false
      }))
    }, 3000);

  }

  return (
    <form className="mt-8 space-y-6" onSubmit={submitForm}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div className='pb-3'>
          <label htmlFor="name" className="block text-sm font-medium text-black-500 mb-1">
            Nombre
          </label>
          <input
            type="text" 
            name="name"
            value={ name.value }
            onChange={ handleInputChange }
            id="name"
            autoComplete="off"
            className={`
              block w-full pr-10 text-red-900 focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
              ${ name.error && 'inputError' }
            `}
            placeholder=""
            aria-invalid="true"
            aria-describedby="name"
            required
          />
          <p className="mt-2 text-xs text-red-600">
            { name.error }
          </p>
        </div>

        <div className='pb-3'>
          <label htmlFor="email" className="block text-sm font-medium text-black-500 mb-1">
            Correo Electrónico
          </label>
          <input
            type="text" 
            name="email"
            value={ email.value }
            onChange={ handleInputChange }
            id="email"
            autoComplete="off"
            className={`
              block w-full pr-10 text-red-900 focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
              ${ email.error && 'inputError' }
            `}
            placeholder=""
            aria-invalid="true"
            aria-describedby="email"
            required
          />
          <p className="mt-2 text-xs text-red-600">
            { email.error }
          </p>
        </div>
      
        <div className='pb-3'>
          <label htmlFor="phone" className="block text-sm font-medium text-black-500 mb-1">
            Teléfono
          </label>
          <input
            type="text" 
            name="phone" 
            value={ phone.value }
            onChange={ handleInputChange }
            id="phone"
            autoComplete="off"
            className={`
              block w-full pr-10 text-red-900 focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
              ${ phone.error && 'inputError' }
            `}
            aria-invalid="true"
            aria-describedby="phone-error"
            required
          />
          <p className="mt-2 text-xs text-red-600" id="email-error">
            { phone.error }
          </p>
        </div>

        <div className='pb-3'>
          <label htmlFor="date" className="block text-sm font-medium text-black-500 mb-1">
            Fecha
          </label>
          <input
            type="date" 
            name="date" 
            value={ date.value }
            onChange={ handleInputChange }
            id="date"
            required
            autoComplete="off"
            className={`
              block w-full pr-10 text-red-900 focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
              ${ date.error && 'inputError' }
            `}
            aria-invalid="true"
            aria-describedby="password-error"
          />
          <p className="mt-2 text-xs text-red-600" id="date-error">
            { date.error }
          </p>
        </div>

        <div className='pb-3'>
          <label htmlFor="message" className="block text-sm font-medium text-black-500 mb-1">
            Mensaje
          </label>
          <textarea 
            name="message" 
            id="message" 
            // required
            cols="30"
            rows="4"
            value={ message.value }
            onChange={ handleInputChange }
            autoComplete="off"
            className={`
              block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
              ${ message.error && 'inputError' }
            `}
          ></textarea>
          <p className="mt-2 text-xs text-red-600" id="message-error">
            { date.error }
          </p>
        </div>

      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Enviar
        </button>
      </div>  
      { alert.active && <Alert alert={alert} /> }
    </form>
  )
}

export default ContactForm;
