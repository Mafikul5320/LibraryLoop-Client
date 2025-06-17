import { BookOpen, MoveRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BookCategoriesCard = ({ oneCategories }) => {
    const { category, color, icon, description, quantity, label, _id } = oneCategories

    return (
        <Link to={`/categories/${_id}`}>
            <div >
                <div className={`${color} h-37 rounded-t-2xl relative`}>
                    <div className='absolute right-4 top-4 border-2 border-white/40 rounded-full w-8 h-8' />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                    <div className='absolute left-4 top-17 border-1 rotate-45 border-white/30  w-6 h-6' />
                    <div className='absolute left-4 bottom-4 border-white/20 bg-white/20 rounded-full w-5 h-5' />
                    <span className='text-center text-6xl overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>{icon}</span>
                </div>
                <div className='bg-white rounded-b-2xl shadow-lg p-6'>
                    <h1 className='text-2xl font-bold '>{category}</h1>
                    <p className='text-gray-600 py-2'>{description}</p>
                    <div className="flex items-center justify-between pt-2 mb-6 text-sm text-gray-500">
                        <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {quantity}+ Books
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                            {label}
                        </span>
                    </div>
                    <p className='flex items-center text-blue-600 font-semibold'>Explore Collection <span className='pl-2'><MoveRight className='pt-1' /></span></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCategoriesCard;