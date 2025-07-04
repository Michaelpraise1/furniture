import React from 'react'
import Navbar from '../Components/Navbar';
import Herosection from '../Components/Herosection';
import Guarantee from '../Components/Guarantee';
import InspiCollection from '../Components/InspiCollection';
import Bys from '../Components/Bys';

import Hiwsection from '../Components/Hiwsection';
import Ourgallery from '../Components/Ourgallery';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Guarantee/>
      <InspiCollection/>
      <Bys/>
      <Ourgallery/>
      <Hiwsection/>
    </div>
  )
}

export default Home;