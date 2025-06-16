import { BookOpen, RefreshCcw } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const BorrowedBooksCardPage = ({ oneborror, borrowData, setBorrowData }) => {
    const { bookimage, bookname, authorname, category, borrowedDate, returnDate, quantity, bookID, _id } = oneborror;

    const server = { quantity };

    const handelReturn = () => {
        axios.put(`http://localhost:3000/books/${bookID}`, server).then(res => {
            console.log(res.data);
        });

        axios.delete(`http://localhost:3000/Borrows/${_id}`).then(res => {
            if (res.data.deletedCount) {
                const remain = borrowData.filter(one => one?._id !== _id);
                Swal.fire({
                    icon: "success",
                    title: "Book returned successfully!",
                    showConfirmButton: false,
                    timer: 1000
                });
                setBorrowData(remain);
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center my-3 justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
        >
            {/* Book Cover and Info */}
            <div className="flex items-start gap-4">
                <div className="relative">
                    <img
                        src={bookimage}
                        alt={bookname}
                        className="w-16 h-20 rounded-lg shadow-xl object-cover"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex justify-center items-center">
                        <BookOpen className="w-3 h-3 text-white" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{bookname}</h2>
                    <p className="text-sm text-gray-500">👤 {authorname}</p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                            {category}
                        </span>
                        <span className="text-sm text-gray-500">
                            📅 Borrowed: <span className="text-gray-700 font-medium">{borrowedDate}</span>
                        </span>
                        <span className="text-sm text-gray-500">→</span>
                        <span className="text-sm text-gray-500">
                            Return : <span className="text-gray-700 font-medium">{returnDate}</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex flex-col items-end space-y-2">
                <button
                    onClick={handelReturn}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                    <RefreshCcw className="w-4 h-4" />
                    Return Book
                </button>
            </div>
        </motion.div>
    );
};

export default BorrowedBooksCardPage;
