import  { useEffect, useState } from 'react'
// import {peopleArray} from './data'
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
const Cards = () => {


useEffect(()=>{
  const apidata=fetch('https://randomuser.me/api/?results=10')
  apidata.then((res)=>res.json()).then((responce)=>{
    let desture=responce.results;
    setList(desture)
  })
},[])
     
    const [list, setList]=useState([])
    const [current,setcurrentindex]=useState(null)
   const [show, setshow]=useState(false)
   const handleShow=(index)=>{
    setshow(true)
    setcurrentindex(index)
    
   }
   const handleClose=()=>setshow(false)
  
  
   const remove=()=>{
           console.log("clicked")
           let updated=[...list]
           updated.splice(current,1)
           setList(updated)
           handleClose()
          
}

                  
  return (
    <div>

        <div className='max-w-7xl m-auto  py-10 px-10'>
          <h1 className='text-4xl font-bold py-5'>Faster Font loading with <span className='text-lime-600'>font events</span></h1>
          <p className='py-5 text-1xl text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui totam amet temporibus, delectus quos excepturi enim deserunt et molestiae eos, odio aliquam eaque dignissimos voluptatum ullam, est obcaecati alias ipsam.</p>
        </div>
        {
        
          list.map((e,index)=>{
            return(
              <div className='relative'>
              <Link to={`details/${e.id.name}`} state={{data:e}}>
                
                <div className='max-w-7xl h-52 py-4 px-32  mx-auto  bg-slate-200 dpy-20 px-10 border-2 border-solid border-slate-300'>
                <div className='flex'>
                 <h1 className='h-15 w-14 myimg '><img src={`${e.picture.large}`} alt="" className='rounded-full' /></h1>
                 <h1 className='text-4xl px-7'>{e.name.first}</h1>
                 <span className='py-10'>{e.email}</span>

                </div> 
                 <div>
                 <p className='text-2xl font-bold'>{e.name.last}</p>
                  </div>
              
              </div>

              </Link> 
              <Button variant='primary' onClick={()=>handleShow(index)} className='bg-slate-600 text-white absolute bottom-12 right-14 '>Remove</Button>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Button variant='primary' onClick={()=>remove()}>Deleted</Button>
        <Button variant='secondary' onClick={handleClose}>Save changes</Button>
        </Modal.Footer>
      </Modal>
              </div>
            )
            })


        }
    </div>
  )
}

export default Cards;