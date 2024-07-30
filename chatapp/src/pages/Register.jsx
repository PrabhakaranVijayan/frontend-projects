import React from 'react'
import addpic from "../assets/image-add-regular-24.png"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-lime-200 h-screen flex items-center justify-center'>
      <div className='flex flex-col w-1/3 bg-white items-center justify-center rounded gap-7 p-4'>
      <span className='text-sky-600 italic font-bold text-3xl pt-1'>Hike</span>
      <span>Create your account</span>
        <input type='text' placeholder='Enter your name' className='border-b-2 border-lime-600 focus: outline-none focus:ring-1 focus:ring-lime-600 rounded w-3/4 py-1 px-1' />
        <input type='email' placeholder='enter your email' className='border-b-2 border-lime-600 focus: outline-none focus:ring-1 focus:ring-lime-600 rounded w-3/4 py-1 px-1' />
        <input type='password' placeholder='enter your password' className='border-b-2 border-lime-600 focus: outline-none focus:ring-1 focus:ring-lime-600 rounded w-3/4 py-1 px-1' />
        <input type='file' style={{display:"none"}} id='file'></input>
        <label htmlFor='file' className='flex items-center'>
          <img src={addpic}></img>
          <span>Add your profile picture</span>
        </label>
        <button className='bg-sky-600 rounded-md w-3/4 text-white py-1'>Sign up</button>
        <p>Already have an account? <Link to="/login" className='text-sky-600'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register