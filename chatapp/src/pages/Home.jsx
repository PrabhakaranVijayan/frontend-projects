import React from 'react'
import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
const Home = () => {
  return (
    <div className='flex h-screen bg-sky-100 '>
      <div className='basis-1/3 border-r-2 border-white'><Sidebar /></div>
      <div className=' basis-3/4'><Chat /></div>
      
      
    </div>
  )
}

export default Home