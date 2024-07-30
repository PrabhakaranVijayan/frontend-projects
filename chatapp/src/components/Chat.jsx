import React from 'react'
import Message from "./Message"
import Input from "./Input"
import mypic from "../assets/Bat man_&_3949d6cd-41fb-4b9a-8ef3-71fc338842af.jpg"
const Chat = () => {
  return (
    <div className='h-screen'>
      <div className='flex ps-2 py-5 justify-start border-b-2 border-white '>
        <img src={mypic} style={{height:"24px",width:"24px"}} className='rounded-full' />
        <span className='ps-3'>Sagar</span>
      </div>
        
      
      <Message />
      <Input />
    </div>
  )
}

export default Chat