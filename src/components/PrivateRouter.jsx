import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loading from './Loading';

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }
    if (!user && !user?.email) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRouter;