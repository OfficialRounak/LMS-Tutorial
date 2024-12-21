import React from 'react';
import MobileSidebar from './MobileSidebar';
import NavbarRoutes from '@/components/NavbarRoutes';

const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center border-b bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
