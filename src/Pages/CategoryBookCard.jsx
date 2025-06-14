import { Eye, Package, SquarePen, Tag, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import ReactStars from "react-rating-stars-component";
import StarRatings from 'react-star-ratings';

const CategoryBookCard = ({ oneBook }) => {
    const { bookname, authorname, description, rating, quantity, category, bookimage, _id } = oneBook;
    return (
        <div className='  rounded-b-xl shadow-lg'>
            <div className='relative'>
                <img className='rounded-t-xl h-55 w-full object-cover' src={bookimage} />
                <span className='bg-gray-200 absolute top-3 left-3 px-3 py-1 flex items-center space-x-1.5 rounded-2xl'><Tag size={17} /><span className='text-xs pb-0.5'>{category}</span></span>
                <span className='bg-green-100 text-green-700 absolute top-3 right-3 px-3 py-1 flex items-center space-x-1.5 rounded-2xl'><Package size={17} /><span className='text-xs  font-bold pb-0.5'>{quantity}</span></span>
            </div>
            <div className=''>
                <h1 className='text-xl font-bold pt-4 px-4'>{bookname}</h1>
                <div className='flex items-center bg-white  text-gray-500 px-4 '>
                    <User size={18} />
                    <p className='py-2'>{authorname}</p>
                </div>
                <p className='text-gray-500 text-sm px-4'>{description}</p>
                <div className='px-2 py-5 flex items-center'>
                    <div>
                        <StarRatings
                            rating={parseFloat(rating)}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            name="rating"
                            starDimension="22px"
                            starSpacing="2px"
                        />
                    </div>
                    <span className='pl-2'>({rating})</span>
                </div>
                <div className=' justify-center py-3 px-3'>
                    <Link to={`/view-details/${_id}`} className='btn py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold text-base w-full '><Eye size={17} />
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryBookCard;