import React from 'react';
import logo from './pexels-rakicevic-nenad-744667.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Read from './read';
 

const Home = () => {
             const navigate=useNavigate()
  const goto=()=>
    {
             navigate('/create')
    }
  return (
    <>
      {/* Navbar */}
      <nav class="p-4">
      <div class="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div class="flex items-center">
          <img
          src="https://img.freepik.com/free-vector/flying-bird-logo-icon-linear-style_126523-946.jpg?size=626&ext=jpg&ga=GA1.1.1436322264.1705857391&semt=sph"
            alt="Logo"
            class="h-12 w-12 rounded-xl "
          />
    
        </div>

        {/* Navigation Items */}
        <ul class="flex items-center space-x-4">
          <li>
            <Link to ='/' class="text-black hover:text-gray-300"> Home</Link>
          </li>
          <li>
            <Link to='/about' class="text-black hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to='/contact' class="text-black hover:text-gray-300">Contact</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>

        {/* Login/Signup Buttons */}
        <div class="flex items-center space-x-4">
        <Link to='/newdata'> <button class="hover:text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Login
          </button></Link>
          <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
      {/* Navbar */}

      {/* Hero section */}
      <div className='container mx-auto py-24 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 md:pl-6 py-7'>
          <h1 className='text-7xl font-bold font-serif mb-6'>
            Articles for <br/>
            <span className='text-2xl text-lime-600'>front-end devs</span>
          </h1>
          <p className='text-xl text-slate-600 mb-8'>
            Articles on web performance, responsive web design and more.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={logo} alt="Logo" className='w-full h-auto md:h-[400px] rounded-lg' />
        </div>
      </div>

       
      <div className="mt-2 mb-2 float-right "><button className="btn btn-primary" onClick={goto}>Create Data</button></div>

              <Read/>

    </>
  );
}

export default Home;
