import React, { useState } from 'react';
import Register from "../assets/register.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='h-20 border-b-[#F2F4D0] tracking-wider sticky top-0 bg-[#F8F9FA] px-6 md:px-28 py-3 z-50 items-center'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={Register} alt="logo" className='w-36' />
        </div>
        <div className='hidden md:flex w-1/2 justify-between items-center'>
          <p>Home</p>
          <p>Startup</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <button className='text-white px-6 rounded-full py-2 cursor-pointer bg-[#FE9C28]'>+918447746183</button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(true)} className='text-2xl'>
            ☰
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>
        <div className="flex flex-col items-start px-6 space-y-6">
          <p>Home</p>
          <p>Startup</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <button className='text-white px-6 rounded-full py-2 cursor-pointer bg-[#FE9C28]'>+918447746183</button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
