import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, SparklesIcon, UserIcon } from 'lucide-react';
const Sidebar = () => {
  return <div className="w-16 md:w-60 bg-gradient-to-b from-[#6e43e5] to-[#4b69e9] flex flex-col items-center md:items-start p-4 text-white">
      <div className="py-8 px-4 w-full">
        <h1 className="text-2xl font-bold md:block hidden">JobU</h1>
        <h1 className="text-2xl font-bold md:hidden block">J</h1>
      </div>
      <nav className="flex flex-col gap-6 w-full">
        <NavLink to="/" className={({
        isActive
      }) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>
          <HomeIcon size={20} />
          <span className="md:block hidden">Home</span>
        </NavLink>
        <NavLink to="/ask-ai" className={({
        isActive
      }) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>
          <SparklesIcon size={20} />
          <span className="md:block hidden">Ask AI</span>
        </NavLink>
      </nav>
      <div className="mt-auto p-2 flex items-center gap-3">
        <UserIcon size={20} />
        <span className="md:block hidden">User</span>
      </div>
    </div>;
};
export default Sidebar;