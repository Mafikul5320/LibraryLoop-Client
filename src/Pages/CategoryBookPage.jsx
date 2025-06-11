import { Eye, Package, SquarePen, Tag, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const CategoryBookPage = () => {
    return (
        <div>
            <h1 className='py-8 text-4xl font-bold text-center'>All Books</h1>
            <div className='grid grid-cols-4 gap-6 w-10/13 mx-auto'>
                <div className='  rounded-b-xl shadow-lg'>
                    <div className='relative'>
                        <img className='rounded-t-xl h-55 w-full' src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg" />
                        <span className='bg-gray-200 absolute top-3 left-3 px-3 py-1 flex items-center space-x-1.5 rounded-2xl'><Tag size={17} /><span className='text-xs pb-0.5'>Drama</span></span>
                        <span className='bg-green-100 text-green-700 absolute top-3 right-3 px-3 py-1 flex items-center space-x-1.5 rounded-2xl'><Package size={17} /><span className='text-xs  font-bold pb-0.5'>5</span></span>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-bold pt-4 px-4'>The Da Vinci Code</h1>
                        <div className='flex items-center bg-white  text-gray-500 px-4 '>
                            <User size={18} />
                            <p className='py-2'>Dan Brown</p>
                        </div>
                        <p className='text-gray-500 text-sm px-4'>A mystery thriller following Harvard symbologist Robert Langdon.</p>
                        <div className='px-2 py-5 flex items-center'>
                            <div className="rating rating-xs rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="1 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="1.5 star" defaultChecked />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="5 star" />
                            </div>
                            <span className='pl-2'>(4.8)</span>
                        </div>
                        <div className='flex items-center space-x-2 justify-center py-3 px-3'>
                            <Link to={'/view-details'} className='btn py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold text-base w-[83%] '><Eye size={17} />
                                View Details
                            </Link>
                            <button
                                className=" px-4 py-3 border-2 border-gray-500 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                            >
                                <SquarePen size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBookPage;