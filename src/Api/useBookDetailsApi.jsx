import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useBookDetailsApi = () => {
    const axiosSecure = useAxiosSecure()
    const BookDetailsData = id => {
        return axiosSecure.get(`/books/${id}`).then(res => res.data)
    }
    return {
        BookDetailsData
    }
};

export default useBookDetailsApi;