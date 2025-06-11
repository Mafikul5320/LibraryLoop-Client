import React from "react";
import { BookOpen, Calendar, CalendarDays, Download, Package, Tag, User } from "lucide-react";

const BookDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Back Button */}
    <div className="mb-6">
      <button
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <span className="w-5 h-5">←</span>
        <span>Back to All Books</span>
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Book Image */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-8">
          <img
            src="/book-image.jpg"
            alt="Gone Girl"
            className="w-full h-96 object-cover rounded-xl mb-6"
          />

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Availability:</span>
              <span className="font-semibold text-green-600">3 available</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rating:</span>
              <div className="flex items-center">
                <div className="rating rating-xs rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="1 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="1.5 star" defaultChecked />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="5 star" />
                            </div>
                <span className="text-sm text-gray-600">(4.2)</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <button
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
            >
              <span className="w-5 h-5"><Download size={19} /></span>
              <span>Borrow Book</span>
            </button>

            <button
              className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Update Book
            </button>
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gone Girl
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center text-gray-600">
              <span className="w-5 h-5 mr-2"><User/></span>
              <span className="text-lg">Gillian Flynn</span>
            </div>

            <div className="flex items-center">
              <span className="w-5 h-5 mr-2 text-gray-600"><Tag size={19}/></span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Thriller
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <span className="w-5 h-5 mr-2"><Package/></span>
              <span>3 copies available</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            A psychological thriller about a marriage gone terribly wrong and the dark secrets that emerge.
          </p>
        </div>

        {/* Book Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-6 h-6 mr-3 text-blue-600"><BookOpen/></span>
            About This Book
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              When Amy Dunne disappears on her fifth wedding anniversary, her husband Nick becomes the prime suspect. This twisted tale explores the complexities of marriage, media manipulation, and the lies we tell ourselves and others.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Book Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Author</h3>
                <p className="text-gray-700">Gillian Flynn</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <p className="text-gray-700">Thriller</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                <div className="flex items-center">
                  <div className="rating rating-xs rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="1 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="1.5 star" defaultChecked />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="5 star" />
                            </div>
                  <span className="ml-2 text-gray-600">(4.2/5)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
                <p className="font-medium text-green-600">3 copies available</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Book ID</h3>
                <p className="text-gray-700 font-mono">2</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Added to Library</h3>
                <div className="flex items-center text-gray-700">
                  <span className="w-4 h-4 mr-2"><Calendar size={18}/></span>
                  <span>January 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BookDetails;
