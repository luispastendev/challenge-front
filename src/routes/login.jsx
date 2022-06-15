import React from 'react'
import LoginForm from '../components/login_form'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center sm:px-6 lg:px-8 bg-black-800 w-screen">
      <LoginForm />
    </div>
  );
}

export default Login