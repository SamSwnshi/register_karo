import React from 'react'

const Card = () => {

  return (
    <div className='px-28 bg-[#164C6E] w-full h-96 flex items-center gap-2'>
      <div className='flex h-56 items-center rounded-xl justify-center bg-white'>
        <div className=' border flex flex-col justify-between items-center'>
          <p>Small business & Startup Accounts</p>
          <p>Make sure your business meets its statutory requirements.</p>
        </div>
        <hr />
        <div>
          <p>Growing Business Package</p>
          <p>Additional support to help you reach your business goals</p>
        </div>
        <div>
          <p>Scale-Up Company Offer</p>
          <p>Compliance, reporting & analysis of performance.</p>
        </div>
      </div>
      <div className='flex h-56 items-center rounded-xl justify-center bg-white flex-col'>
        <p>Setting up a business</p>
        <p>Make sure your business meets its statutory requirements.</p>

      </div>
    </div>
  )
}

export default Card
