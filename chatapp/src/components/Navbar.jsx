import React from 'react'
import mypic from "../assets/Bat man_&_3949d6cd-41fb-4b9a-8ef3-71fc338842af.jpg"

const navbar = () => {
  return (
    <div className='border-b-2 flex justify-between py-5 border-white'>
      <span className='ps-3'>hike</span>
      <div className='flex justify-between px-1'>
        <img src={mypic} style={{height:"24px",width:"24px"}} className='rounded-full'/>
        <span className='px-2'>Prabhakaran</span>
        <button className='border px-2 rounded-full cursor-pointer border-blue-600'>logout</button>
      </div>
    </div>
  )
}

export default navbar