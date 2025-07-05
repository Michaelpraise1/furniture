import React, { lazy, Suspense } from 'react'
import Navbar from '../Components/Navbar';
import Herosection from '../Components/Herosection';
import Guarantee from '../Components/Guarantee';
import InspiCollection from '../Components/InspiCollection';
import Bys from '../Components/Bys';

import Hiwsection from '../Components/Hiwsection';
import Ourgallery from '../Components/Ourgallery';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';

// const InspiCollection = () => lazy(() => import ('../Components/InspiCollection'));

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Guarantee/>
      <Suspense fallback={<Spinner/>}>
        <InspiCollection/>
      </Suspense>
      
      <Bys/>
      <Ourgallery/>
      <Suspense fallback={<Spinner/>}>
        <Hiwsection/>
      </Suspense>
      <Footer/>
      
    </div>
  )
}

export default Home;