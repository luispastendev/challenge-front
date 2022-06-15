import { useContext } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom';
import routes from '../api/routes';
import { useApi } from '../hooks/useApi';
import { useForm } from '../hooks/useForm';
import UserContext from '../lib/context';

function LoginForm() {

  const { startSession }     = useContext(UserContext);
  const { callApi, loading } = useApi();
  const navigate             = useNavigate();
  const [form, handleInputChange, setInputErrors] = useForm({
    email: {
      value: '',
      error: ''
    },
    password: {
        value: '',
        error: ''
    },
  });
  const { email, password } = form;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    callApi({
      url: routes.login(),
      method: 'post',
      data: {
        'email': form.email.value,
        'password': form.password.value,
      },
    },{
      200: (xhr) => { 
        startSession(xhr.data, xhr.data.api_token);
        navigate('/dashboard');
      },
      422: (xhr) => {
        setInputErrors(xhr.errors)
      }
    });
  }  

  return (
    <div className="sm:mx-auto bg-black-700 max-w-[550px] rounded-lg">
      <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="min-h-full flex flex-col items-center justify-center py-5">
            <div className="text-center">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">EmprenD</h2>
              <p className="mt-2 text-center text-md text-black-300">Ingresar al Sistema</p>
              <Link to="/" className='pt-2 block text-red-500 underline underline-offset-4'>Ir a la página principal</Link>
            </div>
            <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className='mb-3'>
                  <label htmlFor="email" className="block text-sm font-medium text-black-200 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="text" 
                    name="email"
                    value={ email.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="email-address"
                    autoComplete="email"
                    className={`
                      text-white bg-black-500 block w-full pr-10 text-red-900focus:outline-none border-black-400 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md
                      ${ password.error && 'inputError' }
                    `}
                    placeholder="ejemplo@mail.com"
                    aria-invalid="true"
                    aria-describedby="email-error"
                  />
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    { email.error }
                  </p>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-black-200 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password" 
                    name="password" 
                    value={ password.value }
                    onChange={ handleInputChange }
                    disabled={ loading }
                    id="password"
                    autoComplete="current-password"
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
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  disabled={loading}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
                  </span>
                  Ingresar
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
                <Link to="/register">
                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center px-4 py-2 border border-black-300 shadow-sm text-sm font-medium rounded-md text-black-700 bg-white hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-700 top-3"
                  >
                    Registrarse
                  </button>
                </Link>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;