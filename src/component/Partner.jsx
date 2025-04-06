import React from 'react'
import InfinityLoop from './InfinityLoop'
import Whatwedo from './Whatwedo'
import Photos from './Photos'

const Partner = () => {
  return (
    <div className='h-screen'>
      <InfinityLoop/>
      <Whatwedo/>
      <Photos/>
    </div>
  )
}

export default Partner
