import React from 'react';
import { useLoaderData } from 'react-router';
import AllBookCard from './AllBookCard';
const AllBook = () => {
    const AllBookData = useLoaderData()
    console.log(AllBookData)

    return (
        <div>
            <title>All Book || LibraryLoop</title>
            <h1 className='py-8 text-4xl font-bold text-center'>All Books</h1>
            <div className='grid grid-cols-4 gap-6 w-10/13 mx-auto'>
                {
                    AllBookData.map(onebook => <AllBookCard key={onebook._id} onebook={onebook}></AllBookCard>)
                }
            </div>
        </div>
    );
};

export default AllBook;