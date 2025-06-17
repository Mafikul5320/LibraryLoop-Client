import React, { Suspense } from 'react';
import Banner from '../Home/Banner';
import BookCategories from '../Home/BookCategories';
import OurNumber from '../Home/OurNumber';
import ChooseLibraryLoop from '../Home/ChooseLibraryLoop';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const categoriesPromise = fetch('https://assignment-11-server-zeta-orcin.vercel.app/categories').then(res => res.json())
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