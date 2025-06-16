import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useAllBookData = () => {
    const axiosSecure = useAxiosSecure()
    const AllBookData = () => {
        return axiosSecure.get('/books').then(res => res.data)
    }
    return {
        AllBookData
    }
};

export default useAllBookData;