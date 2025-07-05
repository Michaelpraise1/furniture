import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
   <div>
    <Navbar/>
    <section className=''>
        <h1 className='mb-5 font-semibold text-2xl mx-5 mt-5'>YOUR CART</h1>
        <div className='flex flex-col items-center mt-40 space-y-8'>
          <span className='flex text-center '>you have no cart</span>
        
      <Link to="/gallery">
        <button className="  text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Continue Shipping</button>
      </Link>
      {/* <button className="  text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Continue Shipping</button> */}
      </div>
    
   </section>
   <Footer/>
  </div>
  )
}

export default Cart