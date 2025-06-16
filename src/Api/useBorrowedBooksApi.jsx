import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useBorrowedBooksApi = () => {
    const axiosSecure = useAxiosSecure()
    const BorrowedBooksData = email => {
        return axiosSecure.get(`/Borrow/${email}`).then(res => res.data)
    }
    return {
        BorrowedBooksData
    }
};

export default useBorrowedBooksApi;