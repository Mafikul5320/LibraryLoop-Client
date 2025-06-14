import { Eye, Package, SquarePen, Tag, User } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CategoryBookCard from './CategoryBookCard';

const CategoryBookPage = () => {
    const Bookdata = useLoaderData();
    console.log(Bookdata)
    return (
        <div>
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