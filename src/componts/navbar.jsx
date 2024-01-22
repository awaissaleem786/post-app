import React from "react";
import { Link, NavLink } from "react-router-dom";

const  Navbar=()=>{
    return(
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
          <button class="hover:text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Login
          </button>
          <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
           

    )
}
export default Navbar;