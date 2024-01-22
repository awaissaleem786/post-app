

import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';

// import { useParams } from "react-router-dom";

const Contact = () => {
         
         const {name,name2}=useParams();
  return (
    <div> 
         <h1>contact page</h1>
          <NavLink to='awais/saleem' style={({isActive})=>{return{
            backgroundColor: isActive? 'green':'red' }}}>  <h1>Awais</h1></NavLink>
           <h1>This is a {name} {name2}</h1>
    </div>
  )
}

export default Contact;