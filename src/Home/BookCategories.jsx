import { BookOpen, MoveRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BookCategories = () => {
    return (
        <div className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='w-10/13 mx-auto'>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    Explore Book Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-center mx-auto">
                    Discover your next favorite read from our carefully curated collection of books across various genres and topics.
                </p>
                <div className='grid grid-cols-4 gap-7 mt-9'>

                    <Link to={'/categories/Book'}>
                    <div>
                        <div className='bg-blue-500 h-37 rounded-t-2xl relative'>
                            <div className='absolute right-4 top-4 border-2 border-white/40 rounded-full w-8 h-8' />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                            <div className='absolute left-4 top-17 border-1 rotate-45 border-white/30  w-6 h-6' />
                            <div className='absolute left-4 bottom-4 border-white/20 bg-white/20 rounded-full w-5 h-5' />
                            <span className='text-center text-6xl overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>📚</span>
                        </div>
                        <div className='bg-white rounded-b-2xl shadow-lg p-6'>
                            <h1 className='text-2xl font-bold '>Novel</h1>
                            <p className='text-gray-600 py-2'>Explore our collection of novel books with captivating stories and compelling narratives.</p>
                            <div className="flex items-center justify-between pt-2 mb-6 text-sm text-gray-500">
                                <span className="flex items-center">
                                    <BookOpen className="w-4 h-4 mr-1" />
                                    250+ books
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Popular
                                </span>
                            </div>
                            <p className='flex items-center text-blue-600 font-semibold'>Explore Collection <span className='pl-2'><MoveRight className='pt-1' /></span></p>
                        </div>
                    </div>
                    </Link>
                    <div>
                        <div className='bg-red-500 h-37 rounded-t-2xl relative'>
                            <div className='absolute right-4 top-4 border-2 border-white/40 rounded-full w-8 h-8' />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                            <div className='absolute left-4 top-17 border-1 rotate-45 border-white/30  w-6 h-6' />
                            <div className='absolute left-4 bottom-4 border-white/20 bg-white/20 rounded-full w-5 h-5' />
                            <span className='text-center text-6xl overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>🔍</span>
                        </div>
                        <div className='bg-white rounded-b-2xl shadow-lg p-6'>
                            <h1 className='text-2xl font-bold '>Novel</h1>
                            <p className='text-gray-600 py-2'>Explore our collection of novel books with captivating stories and compelling narratives.</p>
                            <div className="flex items-center justify-between pt-2 mb-6 text-sm text-gray-500">
                                <span className="flex items-center">
                                    <BookOpen className="w-4 h-4 mr-1" />
                                    250+ books
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Popular
                                </span>
                            </div>
                            <p className='flex items-center text-blue-600 font-semibold'>Explore Collection <span className='pl-2'><MoveRight className='pt-1' /></span></p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-yellow-500 h-37 rounded-t-2xl relative'>
                            <div className='absolute right-4 top-4 border-2 border-white/40 rounded-full w-8 h-8' />
                            <div className='absolute left-4 top-17 border-1 rotate-45 border-white/30  w-6 h-6' />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                            <div className='absolute left-4 bottom-4 border-white/20 bg-white/20 rounded-full w-5 h-5' />
                            <span className='text-center text-6xl overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>🏛️</span>
                        </div>
                        <div className='bg-white rounded-b-2xl shadow-lg p-6'>
                            <h1 className='text-2xl font-bold '>Novel</h1>
                            <p className='text-gray-600 py-2'>Explore our collection of novel books with captivating stories and compelling narratives.</p>
                            <div className="flex items-center justify-between pt-2 mb-6 text-sm text-gray-500">
                                <span className="flex items-center">
                                    <BookOpen className="w-4 h-4 mr-1" />
                                    250+ books
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Popular
                                </span>
                            </div>
                            <p className='flex items-center text-blue-600 font-semibold'>Explore Collection <span className='pl-2'><MoveRight className='pt-1' /></span></p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-purple-500 h-37 rounded-t-2xl relative'>
                            <div className='absolute right-4 top-4 border-2 border-white/40 rounded-full w-8 h-8' />
                            <div className='absolute left-4 top-17 border-1 rotate-45 border-white/30  w-6 h-6' />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                            <div className='absolute left-4 bottom-4 border-white/20 bg-white/20 rounded-full w-5 h-5' />
                            <span className='text-center text-6xl overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>🎭</span>
                        </div>
                        <div className='bg-white rounded-b-2xl shadow-lg p-6'>
                            <h1 className='text-2xl font-bold '>Novel</h1>
                            <p className='text-gray-600 py-2'>Explore our collection of novel books with captivating stories and compelling narratives.</p>
                            <div className="flex items-center justify-between pt-2 mb-6 text-sm text-gray-500">
                                <span className="flex items-center">
                                    <BookOpen className="w-4 h-4 mr-1" />
                                    250+ books
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Popular
                                </span>
                            </div>
                            <p className='flex items-center text-blue-600 font-semibold'>Explore Collection <span className='pl-2'><MoveRight className='pt-1' /></span></p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-11'>
                        <button
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg "
                    >
                        View All Categories
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default BookCategories;