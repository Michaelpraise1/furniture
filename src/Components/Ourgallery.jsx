import React from 'react'
import img4 from "../assets/img4.png"
import img5 from "../assets/Image-living room.png"
import img6 from "../assets/img5.png"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Ourgallery = () => {
  return (
    <>
    <Navbar/>
    <section className='m-8 '>
          <div className='flex flex-col m-8 text-center justify-center items-center'> 
            <h1 className=' font-bold text-2xl'>Our Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex justify-center space-x-5 mt-5'>
            <button className='space-y-2 hover:animate-pulse'>
              <img className=' ' src={img4} alt='img1'/>
              <p className='font-semibold'>Dinning sets</p>
            </button>
            <Link to="/living">
              <button className='space-y-2 hover:animate-pulse'>
              <img className=' '  src={img5} alt='img2'/>
              <p className='font-semibold'>Living sets</p>
            </button>
            </Link>
            
            <button className='space-y-2 hover:animate-pulse'>
              <img className=''  src={img6} alt='img3'/>
              <p className='font-semibold'>Room Set</p>
            </button>

            <button className='space-y-2 hover:animate-pulse'>
              <img className=''  src={img6} alt='img3'/>
              <p className='font-semibold'>Kitchen Set</p>
            </button>
            
            
          </div>
          
    </section>
    
    </>
    
  )
}

export default Ourgallery;