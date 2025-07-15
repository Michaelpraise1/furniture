import React, {  useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const toggleNavbar = () => {
  setMobileNav (!mobileNav)
  }


  


  return (
    <>
    <nav className="flex items-align justify-between mt-5 mb-5">
      <div className="ml-20">
        <h1 className="text-[#054C73] font-bold text-lg ">Furniture</h1>
      </div>
      <div className="flex mr-20">
        <ul className="flex gap-20 items-center  ">
          <Link to="/">
           <li>Home</li>
          </Link>
          
          <li>Service</li>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        
         <Link to="/signin">
            <li className=" text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Sign in</li>
          </Link>
          
        </ul>
         { mobileNav ?  (<LiaTimesSolid onClick={toggleNavbar} className="lg:hidden block text-3xl z-50"/>) : 
        (<IoIosMenu onClick={toggleNavbar} className="lg:hidden block text-3xl mt-4 z-50 "/> )}
      </div>
    </nav>

    {mobileNav && (
      <aside className="flex flex-col gap-3 px-4 py-12 bg-white shadow-lg w-[70%] h-[100vh] absolute right-0 top-0">
       <ul className="space-y-3">
          <Link to="/">
           <li>Home</li>
          </Link>
          
          <li>Service</li>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        
         <Link to="/signin">
            <li className=" text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Sign in</li>
          </Link>
        </ul>
      
    </aside>
    )}
    </>
  )
}

export default Navbar;