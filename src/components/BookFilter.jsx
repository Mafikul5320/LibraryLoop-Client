import React, { useState } from 'react';
import { Funnel, Grid, List } from 'lucide-react';

const BookFilter = ({ showAvailableOnly, setshowAvailableOnly }) => {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className="flex justify-between w-10/13 mx-auto bg-white/60 py-4 px-2 shadow-lg rounded-lg my-5 items-center space-x-4">
            {/* Search Input */}
            <div >
                <button onClick={() => setshowAvailableOnly(!showAvailableOnly)} className={`flex items-center px-4 py-3 border border-gray-200 rounded-xl duration-300 ${showAvailableOnly && 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'}`}><Funnel size={20} /> <span className='font-semibold pl-2'>{showAvailableOnly?"Show All Books":"Show Available Only"}</span></button>
            </div>

            {/* Filter Dropdown */}
            <div className='flex items-center space-x-2'>
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
