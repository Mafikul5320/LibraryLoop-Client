import { BookOpen, MoveRight } from 'lucide-react';
import React, { use, useEffect, useState } from 'react';
import BookCategoriesCard from './BookCategoriesCard';
import { motion } from 'framer-motion'; // ✅ Import motion

const BookCategories = ({ categoriesPromise }) => {
    const Categories = use(categoriesPromise);

    const [showAll, setShowAll] = useState(false);
    const [Categoriesdisplay, setCategoriesDispaly] = useState([]);

    useEffect(() => {
        if (showAll) {
            setCategoriesDispaly(Categories);
        } else {
            setCategoriesDispaly(Categories?.slice(0, 4));
        }
    }, [Categories, showAll]);

    return (
        <div className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='w-10/13 mx-auto'>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    Explore Book Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-center mx-auto">
                    Discover your next favorite read from our carefully curated collection of books across various genres and topics.
                </p>


                <div className='grid md:grid-cols-4 gap-7 mt-9'>
                    {Categoriesdisplay?.map((oneCategories, index) => (
                        <motion.div
                            key={oneCategories._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <BookCategoriesCard oneCategories={oneCategories} />
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <div className='flex justify-center mt-11'>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg "
                    >
                        {showAll ? 'View Less Categories' : 'View All Categories'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCategories;
