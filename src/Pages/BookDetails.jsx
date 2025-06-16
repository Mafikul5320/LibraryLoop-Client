import React, { use, useEffect, useState } from "react";
import { BookOpen, Calendar, CalendarDays, Download, Package, Tag, User } from "lucide-react";
import { Link, useLoaderData, useNavigate } from "react-router";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { user } = use(AuthContext)
  const data = useLoaderData();
  const navigate = useNavigate()
  const [borrowed, setBorrowed] = useState(null);
  console.log(data)
  const { bookimage, bookname, quantity, rating, authorname, category, description, booksummary, _id } = data;
  const [countQuantity, setcountQuantity] = useState(quantity)
  useEffect(() => {
    axios.get(`http://localhost:3000/Borrow/${user?.email}`).then(res => {
      console.log(res.data)
      const alredyBorrowed = res.data.find(oneBorred => oneBorred.email === user?.email && oneBorred.bookID == _id)
      setBorrowed(alredyBorrowed)
    })
  }, [_id, user?.email])
  console.log(borrowed)
  const handelModal = () => {
    document.getElementById('my_modal_4').close()
    navigate(`/Borrowed-Books/${user?.email}`)

  }
  const handleBorrowBook = (e) => {
    e.preventDefault()
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;
    const form = e.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const { displayName, date, email } = data;
    const server = {
      displayName, returnDate: date, email, bookID: _id, quantity, borrowedDate: todayDate, isReturned: false
    }
    axios.post(`http://localhost:3000/Borrow/${_id}`, server).then(res => {
      console.log(res.data)
      if (res.data.insertedId) {
        setcountQuantity(prev => prev - 1)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Borrow Book has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch(error => {
      console.log(error)
    })
    console.log(server)

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <title>Book Details || LibraryLoop</title>
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
                src={bookimage}
                alt="Gone Girl"
                className="w-full h-96 object-cover rounded-xl mb-6"
              />

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Availability:</span>
                  {
                    countQuantity === 0 ? <span className="font-semibold text-red-600">Out of Stock</span> : <span className="font-semibold text-green-600">{countQuantity} available</span>
                  }
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <div>
                      <StarRatings
                        rating={parseFloat(rating)}
                        starRatedColor="#ffd700"
                        numberOfStars={5}
                        name="rating"
                        starDimension="19px"
                        starSpacing="2px"
                      />
                    </div>
                    <div >
                      <span className="text-sm text-gray-600">({rating})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">

                {/* Borrow Book Button to open modal */}
                <button
                  onClick={() => document.getElementById('my_modal_4').showModal()}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 ${countQuantity === 0 || borrowed && 'cursor-not-allowed'}`}
                  disabled={countQuantity === 0 || borrowed}
                >
                  <span className="w-5 h-5"><Download size={19} /></span>
                  <span>{borrowed ? "Already borrowed" : <>
                    {countQuantity === 0 ? "Out of Stock" : "Borrow Book"}
                  </>}</span>

                </button>

                {/* Modal Dialog */}
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-xl">
                    <form
                      onSubmit={handleBorrowBook} // ✅ Correctly reference the function (remove quotes)
                      className="bg-white rounded-2xl p-8 max-w-md w-full space-y-4"
                      method="dialog"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Borrow Book</h3>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="displayName"
                          value={user?.displayName}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={user?.email}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Return Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-3 justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => document.getElementById('my_modal_4').close()}
                          className="px-4 w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Close
                        </button>
                        <button
                          onClick={handelModal}
                          type="submit"
                          className={`bg-gradient-to-r from-blue-600 to-teal-600 w-full text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 ${borrowed && 'cursor-not-allowed'}`}
                          disabled={countQuantity === 0 || borrowed}
                        >
                          Confirm Borrow
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>

                {/* Update Book Button */}
                <Link to={`/update-book/${_id}`}>
                  <button
                    className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Update Book
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                {bookname}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="w-5 h-5 mr-2"><User /></span>
                  <span className="text-lg">{authorname}</span>
                </div>

                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2 text-gray-600"><Tag size={19} /></span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {category}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <span className="w-5 h-5 mr-2"><Package /></span>
                  <span>{countQuantity} copies available</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Book Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-6 h-6 mr-3 text-blue-600"><BookOpen /></span>
                About This Book
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {booksummary}
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
                    <p className="text-gray-700">{authorname}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                    <p className="text-gray-700">{category}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                    <div className="flex items-center">
                      <div>
                        <StarRatings
                          rating={parseFloat(rating)}
                          starRatedColor="#ffd700"
                          numberOfStars={5}
                          name="rating"
                          starDimension="19px"
                          starSpacing="2px"
                        />
                      </div>
                      <span className="ml-2 text-gray-600">({rating}/5)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
                    <p className="font-medium text-green-600">{countQuantity} copies available</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Book ID</h3>
                    <p className="text-gray-700 font-mono">{_id}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Added to Library</h3>
                    <div className="flex items-center text-gray-700">
                      <span className="w-4 h-4 mr-2"><Calendar size={18} /></span>
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
