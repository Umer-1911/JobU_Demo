import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Layout = () => {
  return <div className="flex w-full min-h-screen bg-[#0a0628]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>;
};
export default Layout;