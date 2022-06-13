import React from 'react'
import LoginForm from '../components/login_form'


function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center sm:px-6 lg:px-8 bg-black-800">
      <LoginForm />
    </div>
  );
}

export default Login