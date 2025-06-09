import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-469px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;