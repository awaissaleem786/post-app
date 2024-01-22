
// import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Notfound from '../pages/not';
import Detalis from '../pages/details';
const Myrouter  = () => {
  return (
    <div> 

           
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/details/:id' element={<Detalis/>}/>
              {/* <Route path='' element={<Contact/>}/> */}
              
              
           </Routes>
          
    </div>
  )
}

export default Myrouter; 