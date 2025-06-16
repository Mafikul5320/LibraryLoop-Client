import React from 'react';
import logo from '../assets/logo.jpg';
import { Facebook, Github, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#1e2836] py-9'>
            <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b pb-9 border-gray-600 gap-10'>

                <div>
                    <div className='flex items-center'>
                        <img className='w-10 h-10 object-cover rounded-lg' src={logo} />
                        <h1 className='text-gray-300 font-bold text-xl pl-2'>LibraryLoop</h1>
                    </div>
                    <p className='text-gray-300 pt-6'>
                        Your premier destination for digital library management. Discover, borrow, and manage books with our innovative platform designed for modern readers.
                    </p>
                    <div className='py-6 flex space-x-4'>
                        <Facebook size={36} className='text-white bg-gray-700 p-2 rounded-full' />
                        <Twitter size={36} className='text-white bg-gray-700 p-2 rounded-full' />
                        <Instagram size={36} className='text-white bg-gray-700 p-2 rounded-full' />
                        <Github size={36} className='text-white bg-gray-700 p-2 rounded-full' />
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold text-gray-300'>Quick Links</h1>
                    <ul className='mt-4 text-gray-300 space-y-2'>
                        <li>Home</li>
                        <li>All Book</li>
                        <li>Categories</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-xl font-bold text-gray-300'>Categories</h1>
                    <ul className='mt-4 text-gray-300 space-y-2'>
                        <li>Novel</li>
                        <li>Thriller</li>
                        <li>History</li>
                        <li>Drama</li>
                        <li>Sci-Fi</li>
                        <li>Biography</li>
                    </ul>
                </div>

                {/* Four */}
                <div className='space-y-4 text-gray-300'>
                    <h3 className='text-xl font-semibold'>Contact Info</h3>
                    <div className='space-y-3'>
                        <div className='flex items-start space-x-3'>
                            <MapPin className='w-5 h-5 text-blue-400 flex-shrink-0' />
                            <span>123 Library Street, Book City, BC 12345</span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Phone className='w-5 h-5 text-blue-400 flex-shrink-0' />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Mail className='w-5 h-5 text-blue-400 flex-shrink-0' />
                            <span>info@libraryloop.com</span>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h4 className='font-semibold mb-2'>Stay Updated</h4>
                        <div className='flex flex-col sm:flex-row'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='px-3 py-2 bg-gray-700 text-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-colors duration-200'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center text-gray-300 mt-6 px-4'>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by LibraryLoop</p>
            </div>
        </footer>
    );
};

export default Footer;
