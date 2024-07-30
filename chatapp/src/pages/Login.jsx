import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-lime-200 h-screen flex items-center justify-center'>
      <div className='flex flex-col w-1/3 bg-white items-center justify-center rounded-md gap-7 p-4'>
      <span className='text-sky-600 italic font-bold text-3xl pt-1'>Hike</span>
      <input type='email' placeholder='enter your email' className='border-b-2 border-lime-600 focus: outline-none focus:ring-1 focus:ring-lime-600 rounded w-3/4 py-1 px-1' />
      <input type='password' placeholder='enter your password' className='border-b-2 border-lime-600 focus: outline-none focus:ring-1 focus:ring-lime-600 rounded w-3/4 py-1 px-1' />
        <button className='bg-sky-600 rounded-md w-3/4 text-white py-1'>sign in</button>
        <p>Don't have an account? <Link to="/register" className='text-sky-600'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login