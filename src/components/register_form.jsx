import { useContext } from 'react'
import routes from '../api/routes';
import { useApi } from '../hooks/useApi';
import { useForm } from '../hooks/useForm';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../lib/context';

function RegisterForm() {

  const { startSession } = useContext(UserContext);
  const [form, handleInputChange, setInputErrors] = useForm({
    name: {
      value: '',
      error: ''
    }, 
    email: {
      value: '',
      error: ''
    }, 
    password: {
      value: '',
      error: ''
    }, 
    password_confirmation: {
      value: '',
      error: ''
    },
  });
  const { name, email, password, password_confirmation } = form;
  const navigate = useNavigate();  
	const { callApi, loading } = useApi(); 
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

		callApi({
			method: 'post',
			url: routes.register(),
			data: {
        name:     name.value,
        email:    email.value,
        password: password.value,
        password_confirmation: password_confirmation.value
      }
		},{ 
			422: (xhr) => {
        setInputErrors(xhr.errors)
			},
			201: (xhr) => {
        startSession(xhr.data, xhr.data.api_token);
        navigate('/dashboard');
			}
		});

  }

  return (<>
    <div className="sm:mx-auto bg-black-700 min-w-[550px] rounded-lg">
      <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="min-h-full flex items-center justify-center py-5">
          <div className="max-w-lg w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">EmprenD</h2>
              <p className="mt-2 text-center text-md text-black-300">Registrar una nueva cuenta</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                
                <div className='pb-3'>
                  <label htmlFor="name" className="block text-sm font-medium text-black-200 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text" 
                    name="name"
                    value={ name.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="name"
                    autoComplete="off"
                    className={`
                      text-white bg-black-500 block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
                      ${ name.error && 'inputError' }
                    `}
                    placeholder=""
                    aria-invalid="true"
                    aria-describedby="name"
                  />
                  <p className="mt-2 text-xs text-red-600">
                    { name.error }
                  </p>
                </div>

                <div className='pb-3'>
                  <label htmlFor="email" className="block text-sm font-medium text-black-200 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="text" 
                    name="email"
                    value={ email.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="email"
                    autoComplete="off"
                    className={`
                      text-white bg-black-500 block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
                      ${ email.error && 'inputError' }
                    `}
                    placeholder=""
                    aria-invalid="true"
                    aria-describedby="email"
                  />
                  <p className="mt-2 text-xs text-red-600">
                    { email.error }
                  </p>
                </div>
              
                <div className='pb-3'>
                  <label htmlFor="password" className="block text-sm font-medium text-black-200 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="text" 
                    name="password" 
                    value={ password.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="password"
                    autoComplete="off"
                    className={`
                      text-white bg-black-500 block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
                      ${ password.error && 'inputError' }
                    `}

                    aria-invalid="true"
                    aria-describedby="password-error"
                  />
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    { password.error }
                  </p>
                </div>

                <div className='pb-3'>
                  <label htmlFor="password_confirmation" className="block text-sm font-medium text-black-200 mb-1">
                    Confirmación de Contraseña
                  </label>
                  <input
                    type="text" 
                    name="password_confirmation" 
                    value={ password_confirmation.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="password_confirmation"
                    autoComplete="off"
                    className={`
                      text-white bg-black-500 block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
                      ${ password_confirmation.error && 'inputError' }
                    `}
                    aria-invalid="true"
                    aria-describedby="password-error"
                  />
                  <p className="mt-2 text-xs text-red-600" id="password_confirmation-error">
                    { password_confirmation.error }
                  </p>
                </div>

              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  disabled={loading}
                >
                  Registrar
                  {
                    loading
                      ?
                        <svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-20" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                          <path className="opacity-70" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      : ''
                  }
                </button>
                <Link to="/">
                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center px-4 py-2 border border-black-300 shadow-sm text-sm font-medium rounded-md text-black-700 bg-white hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-700 top-3"
                  >
                    Ingresa con tu Cuenta
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


	</>)
}

export default RegisterForm;