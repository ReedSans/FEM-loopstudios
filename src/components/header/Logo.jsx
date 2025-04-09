import React from 'react'

const Logo = ({isOpen}) => {
  return (
    <>
      <div className={`lg:static |  ${isOpen ? 'fixed' : ''} z-30`}>
        <a href="/" className=''>
          <img src="../images/logo.svg" alt="" className=' w-36 md:w-full'/>
        </a>
      </div>
    </>
  )
}

export default Logo