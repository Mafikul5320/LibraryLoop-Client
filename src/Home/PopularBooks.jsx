import { Crown, Flame, Star, Users, Timer, Clock, BookmarkPlus, Share2, TrendingUp, Eye, ThumbsUp, ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import ReactStars from 'react-rating-stars-component';

const PopularBooks = () => {
  const hardcodedBooks = [
    {
      id: '1',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fiction',
      rating: 4.8,
      totalReads: 12500,
      weeklyReads: 850,
      trend: '+25%',
      description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.',
      badges: ['Trending', "Editor's Choice"],
      readTime: '8 hours',
      popularity: 95
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-6 rounded-full w-24 h-24 mx-auto opacity-20 animate-spin" />
            <div className="relative bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-2xl">
              <Flame className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Popular <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Books</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what's trending in our community. From bestsellers to hidden gems, explore the books everyone's talking about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardcodedBooks.map((book, index) => (
            <div key={book.id} className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20">
                <div className="relative h-64 overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Flame className="h-4 w-4" />
                      <span>#{index + 1}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{book.trend}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                    {book.badges.map((badge, i) => (
                      <span key={i} className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{book.category}</span>
                    <div className="flex items-center space-x-1">
                      <ReactStars count={5} value={book.rating} size={16} edit={false} activeColor="#ffd700" />
                      <span className="text-sm font-semibold text-gray-700 ml-1">{book.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{book.title}</h3>
                  <p className="text-gray-600 mb-3 font-medium">by {book.author}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{book.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Users className="h-4 w-4 text-blue-600 mb-1 mx-auto" />
                      <p className="text-xs text-gray-500">Total Reads</p>
                      <p className="text-sm font-bold text-gray-900">{book.totalReads.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Timer className="h-4 w-4 text-green-600 mb-1 mx-auto" />
                      <p className="text-xs text-gray-500">This Week</p>
                      <p className="text-sm font-bold text-gray-900">{book.weeklyReads}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Clock className="h-4 w-4 text-purple-600 mb-1 mx-auto" />
                      <p className="text-xs text-gray-500">Read Time</p>
                      <p className="text-sm font-bold text-gray-900">{book.readTime}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Popularity</span>
                      <span className="text-sm font-bold text-gray-900">{book.popularity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: `${book.popularity}%` }} />
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link to={`/book/${book.id}`} className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 text-center flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/all-books" className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            <span>Explore All Books</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
