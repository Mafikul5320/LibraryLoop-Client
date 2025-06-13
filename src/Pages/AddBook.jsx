import React from 'react';
import logo from '../assets/logo.jpg'
import { Save } from 'lucide-react';

const AddBook = () => {
    return (
        <div className='w-10/13 mx-auto my-9'>
            <div className='flex justify-center items-center'>
                <img className='w-11 h-11 rounded-xl' src={logo} />
                <h1 className='text-5xl font-bold pl-3'>Add New Book</h1>
            </div>
            <h1 className='text-gray-500 text-xl text-center py-4'>Expand our library collection by adding a new book with detailed <br /> information</h1>
            <div className='bg-white p-5 shadow-lg my-4'>
                <form className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Book Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Book Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter book title"
                                />
                            </div>

                            {/* Author */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Author Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter author name"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category *
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="History">History</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Biography">Biography</option>
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity *
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter quantity"
                                />
                            </div>

                            {/* Rating */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Rating (0-5)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter rating (0-5)"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Book Cover Image
                                </label>
                                <div className="space-y-4">
                                    <input
                                        type="url"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter image URL or upload below"
                                    />


                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Short Description *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Enter a brief description of the book"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Book Content/Summary
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Enter detailed content or summary of the book"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
                        >
                            <span className="w-5 h-5"><Save /></span>
                            <span>Add Book</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddBook;