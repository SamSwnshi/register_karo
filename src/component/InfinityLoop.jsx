import React from 'react'
import adobe from '../assets/adobe.png'
import amazon from '../assets/amazon.png'
import amd from '../assets/amd.png'
import dell from '../assets/dell.png'
import google from '../assets/google.png'
import hp from '../assets/hp.png'
import huawei from '../assets/huawei.png'
import lee from '../assets/lee.png'
import mc from '../assets/mc.png'
import stack from '../assets/stack.png'


const InfinityLoop = () => {
  const company =[
    {
      image: adobe
    },
    {
      image: amazon
    },
    {
      image: amd
    },
    {
      image: dell
    },
    {
      image: google
    },
    {
      image: hp
    },
    {
      image: huawei
    },
    {
      image: lee
    },
    {
      image: mc
    },
    {
      image: stack
    },
  ]
  return (
    <div className='bg-blue-100 h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <p>We partner with the best,
          so that your business can flow seamlessly.</p>
          <p>Your Business needs numerous expertise and that's why we are providing you the best services with the best names in the field .</p>
      </div>
      <div className='flex items-center gap-8 space-x-16 animate-loop-scroll'>
        {company.map((items,idx)=>(
          <div key={idx} className='shadow-md w-20 h-20 flex items-center justify-center bg-white rounded'>
            <img src={items.image} alt="logo" className='w-15'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfinityLoop
