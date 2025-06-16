import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useCategoryBookPageApi = () => {
    const axiosSecure = useAxiosSecure()
    const CategoryBookData = id => {
        return axiosSecure.get(`/books/${id}`).then(res => res.data)
    }
    return {
        CategoryBookData
    }
};

export default useCategoryBookPageApi;