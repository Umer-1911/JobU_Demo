import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
const Login = () => {
  const handleLogin = (data: any) => {
    console.log('Login data:', data);
    // Implement login logic here
  };
  return <div className="min-h-screen w-full bg-[#0a0628] flex flex-col">
      <header className="p-4">
        <Link to="/" className="text-white text-2xl font-bold">
          JobU
        </Link>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <AuthForm type="login" onSubmit={handleLogin} />
      </div>
    </div>;
};
export default Login;