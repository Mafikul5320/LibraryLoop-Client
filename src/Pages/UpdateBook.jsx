import axios from 'axios';
import { Save } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const data = useLoaderData()
    console.log(data)
    const { bookimage, bookname, quantity, rating, authorname, category, description, booksummary, _id } = data;
    const Handelsubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const submitdata = Object.fromEntries(formData.entries())
        const quantity = submitdata.quantity
            submitdata.quantity = parseInt(quantity)
        console.log(submitdata)
        axios.put(`http://localhost:3000/books/${_id}`, submitdata).then(res => {
            console.log(res.data)
            if (res.data.modifiedCount) {
                Swal.fire({
                    icon: "success",
                    title: "Book update successfull!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center py-5'>Update the Book</h1>
            <title>Update Book|| LibraryLoop</title>
            <div className='bg-white p-5 shadow-xl rounded-lg  w-10/13 mx-auto my-9'>
                <form onSubmit={Handelsubmit} className="space-y-8">
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
                                    name='bookname'
                                    defaultValue={bookname}
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
                                    name='authorname'
                                    defaultValue={authorname}
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
                                    name='category'
                                    defaultValue={category}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="History">History</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity *
                                </label>
                                <input
                                    type="number"
                                    name='quantity'
                                    defaultValue={quantity}
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
                                    name='rating'
                                    defaultValue={rating}
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
                                        name='bookimage'
                                        defaultValue={bookimage}
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
                                    name='description'
                                    defaultValue={description}
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
                                    name='booksummary'
                                    defaultValue={booksummary}
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
                            <span>Update Book</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateBook;