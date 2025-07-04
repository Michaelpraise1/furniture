import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-align justify-between mt-5 mb-5">
      <div className="ml-20">
        <h1 className="text-[#054C73] font-bold text-lg ">Furniture</h1>
      </div>
      <div className="flex mr-20">
        <ul className="flex gap-20">
          <li>Home</li>
          <li>Service</li>
          <li>Gallery</li>
          <li>Cart</li>
          <li>Signup</li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar;