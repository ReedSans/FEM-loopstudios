import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <ul className="lg:flex justify-between hidden">
      <li className="ml-6">
        <Link to='/' className="link-styling">About</Link>
      </li>
      <li className="ml-6">
        <Link to='/careers' className="link-styling">Careers</Link>
      </li>
      <li className="ml-6">
        <Link to='/events' className="link-styling">Events</Link>
      </li>
      <li className="ml-6">
        <Link to='/products' className="link-styling">Products</Link>
      </li>
      <li className="ml-6">
        <Link to='/support' className="link-styling">Support</Link>
      </li>
    </ul>
  )
}

export default NavMenu