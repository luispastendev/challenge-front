import React from 'react'
import RegisterForm from '../components/register_form';


function Register() {
  return (<>
    <div className="min-h-screen flex flex-col justify-center sm:px-6 lg:px-8 bg-black-800">
      <RegisterForm />
    </div>
  </>);
}

export default Register