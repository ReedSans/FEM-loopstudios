import { Link } from "react-router-dom"

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <>
    
    <button className={`lg:hidden lg:static | ${isOpen ? 'fixed right-8' : ''} flex flex-col justify-between text-darker h-[20px] w-[30px] transition-all duration-300 ease-in-out z-20`} onClick={toggle}>
      <span className={`bg-white rounded-md w-full h-[2px] transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-x-[3px] translate-y-[10px]' : ''}`}></span>
      <span className={`bg-white rounded-md w-full h-[2px] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`bg-white rounded-md w-full h-[2px] transition-all duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-x-[3px] translate-y-[-8px]' : ''}`}></span>
    </button>
    <ul className={`lg:hidden | fixed text-2xl font-slim uppercase bg-black p-7 flex flex-col justify-center h-screen w-full top-0 transition-all duration-700 ease-in-out ${isOpen ? 'left-0' : 'left-[-1000px]'} z-10`}>
      <li className='py-4 hover:bg-white hover:text-black  hover:font-semibold px-3 mt-1 transition-colors duration-300 ease-in-out'><Link onClick={toggle} to='/'>About</Link></li>
      <li className='py-4 hover:bg-white hover:text-black hover:font-semibold px-3 mt-1 transition-colors duration-300 ease-in-out'><Link onClick={toggle} to='/careers'>Careers</Link></li>
      <li className='py-4 hover:bg-white hover:text-black hover:font-semibold px-3 mt-1 transition-colors duration-300 ease-in-out'><Link onClick={toggle} to='/events'>Events</Link></li>
      <li className='py-4 hover:bg-white hover:text-black hover:font-semibold px-3 mt-1 transition-colors duration-300 ease-in-out'><Link onClick={toggle} to='/products'>Products</Link></li>
      <li className='py-4 hover:bg-white hover:text-black hover:font-semibold px-3 mt-1 transition-colors duration-300 ease-in-out'><Link onClick={toggle} to='/support'>Support</Link></li>
    </ul>
    </>
    
  )
}

export default MobileMenu