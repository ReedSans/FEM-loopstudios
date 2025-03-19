import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <h1 className='text-7xl'>Page Not Found</h1>
      <Link to='/' className='py-4 px-8 mt-12 bg-black hover:bg-white text-white hover:text-black border-2 border-white hover:border-black transition-all duration-300 ease-in-out'>Back to home</Link>
    </div>
  )
}

export default NotFound