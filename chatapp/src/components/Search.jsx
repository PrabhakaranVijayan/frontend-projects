import React from 'react'
import mypic from "../assets/Bat man_&_3949d6cd-41fb-4b9a-8ef3-71fc338842af.jpg"
const Search = () => {
  return (
    <div className='border-b-2 border-white'>
      <input type='text' placeholder='Find a user' className='w-full ps-2 py-2 border-b border-white bg-transparent focus:outline-none' />
      <div className='flex px-2 py-3 justify-start '>
        <img src={mypic} style={{height:"24px",width:"24px"}} className='rounded-full' />
        <span className='ps-2'>Sagar</span>
      </div>
    </div>
  )
}

export default Search