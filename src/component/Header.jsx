import React from 'react'
import Register from "../assets/register.png"

const Header = () => {
  return (
    <div className='h-20 border-1 tracking-wider sticky px-28 py-3'>
      <div className='flex items-center justify-between '>
        <div>
          <img src={Register} alt="logo" className='w-54'/>
        </div>
        <div className='flex w-1/2 justify-between items-center'>
          <p>Home</p>
          <p>Startup</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <button className='border-1 px-6 rounded-full py-2 cursor-pointer'>+918447746183</button>
        </div>
      </div>
    </div>
  )
}

export default Header
