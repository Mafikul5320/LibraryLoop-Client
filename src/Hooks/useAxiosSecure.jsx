import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-zeta-orcin.vercel.app'
});

const useAxiosSecure = () => {
    const { user, SignOut,setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    // Request interceptor
    axiosInstance.interceptors.request.use(config => {
        if (user?.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });

    // Response interceptor
    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if ( error.response.status === 401 ||error.response && error.response.status === 403) {
                SignOut().then(() => {
                    setUser(null)
                    navigate('/login')
                });
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
