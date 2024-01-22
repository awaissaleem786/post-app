import React, { useState } from 'react'
import {peopleArray} from './data'
import { Link } from 'react-router-dom'
const Cards = () => {
    const [list, setList]=useState(peopleArray)
let remove=()=>{
        setList(list.slice(0,-1))
        // console.log(setList(list[0]))
        // list.slice(0,-1)
      }
                  
  return (
    <div>

        <div className='max-w-7xl m-auto  py-10 px-10'>
          <h1 className='text-4xl font-bold py-5'>Faster Font loading with <span className='text-lime-600'>font events</span></h1>
          <p className='py-5 text-1xl text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui totam amet temporibus, delectus quos excepturi enim deserunt et molestiae eos, odio aliquam eaque dignissimos voluptatum ullam, est obcaecati alias ipsam.</p>
        </div>
        {
            peopleArray.map((e)=>{
            return(
              <Link to={`details/${e.id}`} >
                
                <div className='max-w-7xl h-52 py-4 px-32  mx-auto  bg-slate-200 dpy-20 px-10 border-2 border-solid border-slate-300'>
                <div className='flex'>
                 <h1 className='h-15 w-14 '><img src={`${e.image}`} alt="" className='rounded-full' /></h1>
                 <h1 className='text-4xl px-7'>{e.name}</h1>
                 <span className='py-10'>{e.address}</span>

                </div> 
                 <div>
                 <p className='text-2xl font-bold'>{e.profession}</p>
                  </div>
              
              <button onClick={remove} className='bg-slate-600 text-white'>Remove</button>
              </div>

              </Link> 
            )
            })


        }
    </div>
  )
}

export default Cards