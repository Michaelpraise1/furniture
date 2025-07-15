import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Data from '../Data'



const LivingRoom = () => {
  const livingRoom = Data.find((dat) => dat.id === 1);

  if (!Data) return <p> Living room Data not found.</p>;
  return (
    
    <div>
      <Navbar/>
      <section>
        <h1 className='flex items-center text-center font-bold text-3xl'>Living Room</h1>
        
        { livingRoom.products.map((p, index) => {
          <article key={index}>
          <div>
          <img src={p.image}/>
        </div>
        <div className='space-y-4'>
          <span className='text-xs text-gray-500'>{p.name}</span>
          <p className='font-semibold text-lg'>{p.pricing}</p>
          <p className='text-sm text-gray-700'>{p.review}</p>
        </div>
        </article>

        }) }
      </section>
      <Footer/>

    </div>
  )
}

export default LivingRoom;