
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Ourgallery from './Components/Ourgallery'
import Cart from './Pages/Cart'
import LivingRoom from './Pages/LivingRoom'
import Dinning from './Pages/Dinning'
import Bedroom from './Pages/Bedroom'
import Kitchen from './Pages/Kitchen'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="signup" element={ <Signup/> }/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="gallery" element={ <Gallery/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="living" element={ <LivingRoom/>}/>
          <Route path="kitchen" element={ <Kitchen/>}/>
          <Route path="bed" element={ <Bedroom/>}/>
          <Route path="dinning" element={ <Dinning/>}/>
          <Route path="services" element={ <Services/>}/>
          
         
        </Routes>
      
       
       
            
      </div>
        
    </>
  )
}

export default App
