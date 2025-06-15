import { BookMarked, BookOpen } from 'lucide-react';
import React, { Suspense, use } from 'react';
import BorrowedBooksCard from './BorrowedBooksCard';
import BookFilter from '../components/BookFilter';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import { useLoaderData } from 'react-router';

const BorrowedBooks = () => {
  const { user } = use(AuthContext);
  const BorrowedBooksData = useLoaderData()
  axios.get(`http://localhost:3000/Borrow/${user?.email}`, { email: user?.email }).then(res => {
    console.log(res.data)
  }).catch(error => console.log(error))
  return (
    <div className='bg-[#f0f7fe] min-h-screen'>
      <div className='w-10/13 mx-auto py-8'>
        <div className='flex justify-center text-white items-center mx-auto text-wh bg-gradient-to-r from-blue-600 to-teal-600 w-25 h-25 rounded-full'>
          <BookMarked size={60} />
        </div>
        <h1 className='text-6xl font-bold text-center py-3'>My Reading <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent'>Journey</span></h1>
        <p className='text-gray-500 text-xl py-3 text-center'>Track your borrowed books, monitor reading progress, and manage your literary <br /> adventures all in one place.</p>
        <div className='grid grid-cols-4 gap-6 mt-6'>
          <div className='shadow-lg py-9 bg-white/60 rounded-2xl'>
            <div className='bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center mx-auto text-blue-700'>
              <BookOpen size={35} />
            </div>
            <div className='text-center  pt-3 leading-relaxed'>
              <span className='text-xl font-bold'>4</span>
              <h1 className='text-gray-500'>Total Book</h1>
            </div>
          </div>
          <div className='shadow-lg py-9 bg-white/60 rounded-2xl'>
            <div className='bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center mx-auto text-blue-700'>
              <BookOpen size={35} />
            </div>
            <div className='text-center  pt-3 leading-relaxed'>
              <span className='text-xl font-bold'>4</span>
              <h1 className='text-gray-500'>Total Book</h1>
            </div>
          </div>
          <div className='shadow-lg py-9 bg-white/60 rounded-2xl'>
            <div className='bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center mx-auto text-blue-700'>
              <BookOpen size={35} />
            </div>
            <div className='text-center  pt-3 leading-relaxed'>
              <span className='text-xl font-bold'>4</span>
              <h1 className='text-gray-500'>Total Book</h1>
            </div>
          </div>
          <div className='shadow-lg py-9 bg-white/60 rounded-2xl'>
            <div className='bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center mx-auto text-blue-700'>
              <BookOpen size={35} />
            </div>
            <div className='text-center  pt-3 leading-relaxed'>
              <span className='text-xl font-bold'>4</span>
              <h1 className='text-gray-500'>Total Book</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-10/13 mx-auto'>
        <BookFilter></BookFilter>
        <Suspense>
          <BorrowedBooksCard BorrowedBooksData={BorrowedBooksData}></BorrowedBooksCard>
        </Suspense>
      </div>
    </div>
  );
};

export default BorrowedBooks;