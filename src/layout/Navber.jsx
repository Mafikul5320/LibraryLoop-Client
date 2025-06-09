import React from 'react';
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='bg-white/10 backdrop-blur-md shadow-xl py-3'>
            <div className='w-10/13 mx-auto flex justify-between items-center'>
                {/*left site  */}
                <div className='flex items-center'>
                    <img className='w-10 h-10 object-cover rounded-lg' src={logo} alt="" srcset="" />
                    <h1 className='text-2xl pl-2 font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>LibraryLoop</h1>
                </div>
                {/* Middle Site */}
                <div className='flex items-center space-x-3'>
                    <button className='text-base font-semibold  text-gray-500'><NavLink to={'/'} className={({ isActive }) => isActive && "text-blue-600 border-b-2 pb-1"}>Home</NavLink></button>

                    <button className=' font-semibold text-gray-700'><NavLink to={'/'} className={({ isActive }) => isActive && "text-blue-600 border-b-2 pb-1"}>All Books</NavLink></button>

                    <button className='text-base font-semibold text-gray-500'><NavLink to={'/'} className={({ isActive }) => isActive && "text-blue-600 border-b-2 pb-1"}>Add Book</NavLink></button>
                    
                    <button className='text-base font-semibold text-gray-500'><NavLink to={'/'} className={({ isActive }) => isActive && "text-blue-600 border-b-2 pb-1"}>Borrowed Books</NavLink></button>
                </div>
                {/* Right site */}
                <div className='flex items-center space-x-4'>
                    <button className='text-base font-semibold'><NavLink to={'/'} className={({ isActive }) => isActive && "text-blue-600 border-b-2 pb-1"}>Login</NavLink></button>
                    <button className='btn bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-base'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;