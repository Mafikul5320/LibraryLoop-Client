import React, { useState } from 'react';
import { Star, StarHalf, User } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    avatar: '',
    rating: 4.5,
    review:
      'LibraryLoop is amazing! The interface is super smooth and fast. I love how easy it is to borrow books and track my reading progress. Highly recommended for any book lover!',
    date: 'June 30, 2025',
  },
  {
    id: 2,
    name: 'Md Foysal Islam',
    avatar: '',
    rating: 5,
    review:
      'I’ve used many library systems, but LibraryLoop stands out. It’s fast, intuitive, and the recommendation engine actually works! I discovered so many great reads.',
    date: 'June 28, 2025',
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-500" />
      ))}
      {hasHalf && <StarHalf className="w-4 h-4 fill-yellow-500" />}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="flex items-center space-x-4">
        {review.avatar ? (
          <img src={review.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        ) : (
          <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded-full">
            <User className="w-8 h-8 text-white" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{review.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
        </div>
      </div>
      <div className="mt-3">
        <StarRating rating={review.rating} />
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
          {expanded || review.review.length < 120
            ? review.review
            : `${review.review.substring(0, 120)}...`}
          {review.review.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 dark:text-blue-400 ml-2 text-sm"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
      </div>
    </motion.div>
  );
};

const BookReview = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          What Our Readers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Real feedback from people who use LibraryLoop every day.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default BookReview;
