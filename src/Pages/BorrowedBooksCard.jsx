import { Calendar, Clock4, Eye, RotateCcw } from 'lucide-react';
import React from 'react';

const BorrowedBooksCard = () => {
    return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20">
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Book Cover"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full bg-red-50 text-sm font-medium border border-red-500 text-red-500">
          483 days overdue
        </span>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium">
          60% read
        </span>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          Thriller
        </span>
        <div className="flex items-center space-x-1">
          ⭐
          <span className="text-sm font-medium">4.5</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        Gone Girl
      </h3>
      <p className="text-gray-600 mb-4">by Gillian Flynn</p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Reading Progress</span>
          <span>60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={19}/> <span className="ml-2">Borrowed: Jan 10, 2025</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock4 size={19} /> <span className="ml-2">Due: Jan 25, 2025</span>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-3 mb-4">
        <p className="text-sm text-gray-700 italic">"A gripping thriller with an unexpected twist."</p>
      </div>

      <div className="flex space-x-2">
        <button
          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <RotateCcw size={19} /><span>Return</span>
        </button>
        <button className="bg-blue-100 text-blue-600 px-4 py-3 rounded-xl font-medium hover:bg-blue-200 transition-all duration-200 flex items-center justify-center">
          <Eye size={19} />
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default BorrowedBooksCard;