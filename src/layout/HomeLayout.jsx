import React, { Suspense } from 'react';
import Banner from '../Home/Banner';
import BookCategories from '../Home/BookCategories';
import OurNumber from '../Home/OurNumber';
import ChooseLibraryLoop from '../Home/ChooseLibraryLoop';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const categoriesPromise = fetch('http://localhost:3000/categories').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <BookCategories categoriesPromise={categoriesPromise}></BookCategories>
            </Suspense>
            <ChooseLibraryLoop></ChooseLibraryLoop>
            <OurNumber></OurNumber>
        </div>
    );
};

export default HomeLayout;