import React from 'react'
import down from "../assets/down.png"
import up from "../assets/up.png"
import man from "../assets/man.png"
import people from '../assets/people.png'
import growth from '../assets/growth.png'

const Photos = () => {
  return (
    <div className=' h-96 flex items-center justify-center bg-[#F0F4FF]'>
      <div className='flex  w-full h-24 items-center justify-center  gap-5'>
        <img src={man} alt="" className='w-22 bg-[#164760] rounded' />
        <img src={down} alt="" className=' '/>
        <img src={people} alt="" className='w-22 bg-[#FE9C28] rounded' />
        <img src={up} alt="" />
        <img src={growth} alt="" className='w-22 bg-[#164760] rounded' />

      </div>
    </div> 
  )
}

export default Photos
