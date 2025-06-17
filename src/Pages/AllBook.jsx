import React, { use, useState } from 'react';
import { Link } from 'react-router';
import AllBookCard from './AllBookCard';
import BookFilter from '../components/BookFilter';
import { Eye, Funnel, Grid, List, SquarePen, Tag } from 'lucide-react';
import StarRatings from 'react-star-ratings';
import { motion } from 'framer-motion'; 

const AllBook = ({ AllBookData }) => {
  const AllBookInfo = use(AllBookData);
  const [allBook, setAllBook] = useState(AllBookInfo);
  const [viewMode, setViewMode] = useState('grid');
  const [showAvailableOnly, setshowAvailableOnly] = useState(false);

  const displayBook = showAvailableOnly
    ? allBook.filter(onebook => onebook.quantity > 0)
    : allBook;

  return (
    <div className='bg-blue-50/60'>
      <title>All Book || LibraryLoop</title>
      <h1 className='py-6 text-4xl font-bold text-center'>All Books</h1>
      <p className='text-xl py-2 text-center'>
        Explore our complete collection of books across various categories and genres
      </p>

      {/* Filter & View Controls */}
      <div className="flex justify-between w-10/13 mx-auto bg-white/60 py-4 px-2 shadow-lg rounded-lg my-5 items-center space-x-4">
        <div>
          <button
            onClick={() => setshowAvailableOnly(!showAvailableOnly)}
            className={`flex items-center px-4 py-3 border border-gray-200 rounded-xl duration-300 ${
              showAvailableOnly && 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
            }`}
          >
            <Funnel size={20} />
            <span className='font-semibold pl-2'>
              {showAvailableOnly ? "Show All Books" : "Show Available Only"}
            </span>
          </button>
        </div>

        {/* View Mode Buttons */}
        <div className='flex items-center space-x-2'>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View with motion */}
      {viewMode === "grid" ? (
        <div className='grid md:grid-cols-4 gap-6 w-10/13 mx-auto'>
          {
            displayBook.map((onebook, index) => (
              <motion.div
                key={onebook._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AllBookCard viewMode={viewMode} onebook={onebook} />
              </motion.div>
            ))
          }
        </div>
      ) : (
        // List View (unchanged)
        <div className='w-10/13 mx-auto'>
          <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Cover</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Author</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {
                displayBook.map(onebook => (
                  <tr key={onebook._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <img
                        src={onebook.bookimage}
                        alt={onebook.bookname}
                        className="w-14 h-20 object-cover rounded-md border"
                      />
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">
                      {onebook.bookname}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {onebook.authorname}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        <Tag size={14} className="mr-1" />
                        {onebook.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold">
                      {onebook.quantity === 0 ? (
                        <span className="text-red-600">Out of Stock</span>
                      ) : (
                        <span className="text-green-600">{onebook.quantity}</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <StarRatings
                          rating={parseFloat(onebook.rating)}
                          starRatedColor="#ffd700"
                          numberOfStars={5}
                          name="rating"
                          starDimension="16px"
                          starSpacing="1px"
                        />
                        <span className="text-gray-600 text-xs">({onebook.rating})</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <Link
                        to={`/view-details/${onebook._id}`}
                        className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-md text-xs font-medium hover:bg-blue-700"
                      >
                        <Eye size={16} className="mr-1" />
                        View
                      </Link>
                      <Link
                        to={`/update-book/${onebook._id}`}
                        className="inline-flex items-center px-3 py-1 border border-gray-400 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-100"
                      >
                        <SquarePen size={16} className="mr-1" />
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBook;
