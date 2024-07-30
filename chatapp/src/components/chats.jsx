import React from 'react'
import mypic from "../assets/Bat man_&_3949d6cd-41fb-4b9a-8ef3-71fc338842af.jpg"
const chats = () => {
  return (
    <div className='flex px-2 py-3 justify-start border-b border-white'>
        <img src={mypic} style={{height:"24px",width:"24px"}} className='rounded-full' />
        <span className='ps-2'>Sagar</span>
      </div>
  )
}

export default chats