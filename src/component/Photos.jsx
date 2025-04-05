import React from 'react'
import down from "../assets/downarrow.jpeg"
import up from "../assets/uparrow.jpeg"
import man from "../assets/man.png"
import people from '../assets/people.png'
import growth from '../assets/growth.png'

const Photos = () => {
  return (
    <div className='flex w-full h-24'>
      <img src={man} alt="" className='border'/>
      <img src={down} alt="" />
      <img src={people} alt="" />
      <img src={up} alt="" />
      <img src={growth} alt="" />
      
    </div>
  )
}

export default Photos
