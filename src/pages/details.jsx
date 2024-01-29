



import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {peopleArray} from '../componts/data'

const Detalis = () => {
             
            let location=useLocation();
           let description =location.state.data


  return (
    <>
      <div className=' max-w-7xl m-auto flex h-screen bg-cyan-100 py-20 px-20'>
        <div className='basis-[45%]'>
           <img src={`${description.picture.large}`} alt="" className='rounded-2xl h-[100%]' />
        </div>
        <div className='basis-[50%] py-10 px-10'>
          <h1 className='text-5xl font-bold text-black py-5'>{description.first}</h1>
          <p className='text-2xl text-black py-5'>{description.email}</p>
          <p className='text-1xl text-black font-bold'>{description.location.city}</p>
        </div>
      </div>
    </>
  )
}

export default Detalis;