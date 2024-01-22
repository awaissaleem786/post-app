



import React from 'react'
import { useParams } from 'react-router-dom';
import {peopleArray} from '../componts/data'

const Detalis = () => {
                              
    const {id} =useParams()

      let  description=peopleArray.find((e)=>{
        return e.id==id
       })
  return (
    <>
      <div className=' max-w-7xl m-auto flex h-screen bg-cyan-100 py-20 px-20'>
        <div className='basis-[45%]'>
           <img src={`${description.image}`} alt="" className='rounded-2xl h-[100%]' />
        </div>
        <div className='basis-[50%] py-10 px-10'>
          <h1 className='text-5xl font-bold text-black py-5'>{description.name}</h1>
          <p className='text-2xl text-black py-5'>{description.address}</p>
          <p className='text-1xl text-black font-bold'>{description.profession}</p>
        </div>
      </div>
    </>
  )
}

export default Detalis;