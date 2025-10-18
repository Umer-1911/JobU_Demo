import React, { useState } from 'react';
import Button from './Button';
import { ArrowRightIcon } from 'lucide-react';
type AuthFormProps = {
  type: 'login' | 'signup';
  onSubmit: (data: any) => void;
};
const AuthForm = ({
  type,
  onSubmit
}: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      email,
      password
    });
  };
  return <div className="w-full max-w-md bg-black/60 p-8 rounded-xl border border-purple-500/30 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {type === 'login' ? 'Log in or sign up' : 'Create an account'}
      </h2>
      <p className="text-gray-300 text-sm mb-6 text-center">
        {type === 'login' ? "Use your email or another service to continue with JobU (it's free!)" : 'Join JobU to discover your dream job opportunities'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-300">
            Email (personal or work)
          </label>
          <div className="relative">
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-black/30 text-white px-4 py-3 rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <ArrowRightIcon size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-gray-300">
            Password
          </label>
          <div className="relative">
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-black/30 text-white px-4 py-3 rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <ArrowRightIcon size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        <Button type="submit" variant="gradient" fullWidth>
          {type === 'login' ? 'Log in' : 'Sign up'}
        </Button>
      </form>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-black/60 text-gray-400">OR</span>
        </div>
      </div>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-purple-500/30 rounded-lg py-3 transition-all">
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-purple-500/30 rounded-lg py-3 transition-all">
          Continue with Facebook
        </button>
      </div>
    </div>;
};
export default AuthForm;