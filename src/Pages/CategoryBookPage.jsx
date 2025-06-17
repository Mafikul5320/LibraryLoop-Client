import { Eye, Package, SquarePen, Tag, User } from 'lucide-react';
import React, { use } from 'react';
import CategoryBookCard from './CategoryBookCard';

const CategoryBookPage = ({CategoryBookData}) => {
    const Bookdata = use(CategoryBookData);
    // console.log(Bookdata)
    return (
        <div>
            <title>Book Category|| LibraryLoop</title>
            <h1 className='py-8 text-4xl font-bold text-center'>All Books</h1>
            <div className='grid grid-cols-4 gap-6 w-10/13 mx-auto'>
                {
                Bookdata.map(oneBook => <CategoryBookCard key={oneBook._id} oneBook={oneBook}></CategoryBookCard>)
            }
            </div>
        </div>
    );
};

export default CategoryBookPage;