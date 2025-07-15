
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Ourgallery from './Components/Ourgallery'
import Cart from './Pages/Cart'
import LivingRoom from './Pages/LivingRoom'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="signup" element={ <Signup/> }/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="gallery" element={<Ourgallery/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="living" element={ <LivingRoom/>}/>
         
        </Routes>
       
      
      
      </div>
        
    </>
  )
}

export default App
