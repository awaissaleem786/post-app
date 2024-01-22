import React from 'react'
import { Link } from "react-router-dom";
import logo from './pexels-rakicevic-nenad-744667.jpg'
import Cards from '../componts/card';
const Home = () => {
  return (
    <div>

      
        <div className='mx-w-[1320] h-screen md:py-[80px] py-5 flex  sm:flex-row flex-col justify-center items-center'> 
             <div className='basis-[50%] pl-6 py-7 '>
               <h1 className='text-7xl text-bold font-bold font-serif'> Articles for <br/> <span className='text-2xl text-bold text-lime-600 font-bold '> front-end devs</span> </h1>
               <p className='py-6 text-xl text-slate-600'>Articles on web performance,<br/> reponsive web design and more.</p>
             </div>
             <div className='basis-[45%] flex items-end'>
                    <img src={`${logo}`} alt="" className='w-full h-[400px] rounded-lg ' />
             </div>
      </div>
      <Cards/>
    </div>
  )
}

export default Home;