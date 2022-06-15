import React from 'react'
import RegisterForm from '../components/register_form';

const Register = () => {
  return (<>
    <div className="min-h-screen flex flex-col justify-center items-center sm:px-6 lg:px-8 bg-black-800 w-screen">
      <RegisterForm />
    </div>
  </>);
}

export default Register