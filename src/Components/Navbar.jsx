import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-align justify-between mt-5 mb-5">
      <div className="ml-20">
        <h1 className="text-[#054C73] font-bold text-lg ">Furniture</h1>
      </div>
      <div className="flex mr-20">
        <ul className="flex gap-20 items-center ">
          <Link to="/">
           <li>Home</li>
          </Link>
          
          <li>Service</li>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          
          <li>Cart</li>
          <Link to="/signin">
            <li className="text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</li>
          </Link>
          
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar;