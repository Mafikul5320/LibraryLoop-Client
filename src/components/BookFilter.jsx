import React, { useState } from 'react';
import { Grid, List, Search } from 'lucide-react';

const BookFilter = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex justify-between shadow-ld bg-white/60 py-4 px-2 shadow-lg rounded-lg my-5 items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search books..."
                    className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Filter Dropdown */}
            <div className='flex items-center space-x-2'>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                >
                    <option value="all">All Books</option>
                    <option value="due-soon">Due Soon</option>
                    <option value="overdue">Overdue</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                            }`}
                    >
                        <Grid className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                            }`}
                    >
                        <List className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookFilter;
