import React from 'react'
import attachment from "../assets/attach-file.png"

const Input = () => {
  return (
    <div className='flex  items-center border-t-2 border-white'>
        <input type='text'placeholder='Type something..' className='px-2 py-4 w-5/6 focus:outline-none' />
        <div className='bg-white h-fit'>
            <input type='file' style={{display:"none"}} id='file' />
            <label htmlFor='file'>
            <img style={{width:"36px",height:"36px"}} src={attachment} />

            </label>

            

        </div>
        <button className='border-2 px-2 py-1 rounded-md cursor-pointer'>send</button>
    </div>
  )
}

export default Input