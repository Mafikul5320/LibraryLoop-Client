import React, { Suspense } from 'react';
import Banner from '../Home/Banner';
import BookCategories from '../Home/BookCategories';
import OurNumber from '../Home/OurNumber';
import ChooseLibraryLoop from '../Home/ChooseLibraryLoop';
import Loading from '../components/Loading';
import ReadingExperience from '../Home/ReadingExperience';
import Faq from '../Home/Faq';
import Review from '../Home/Review';

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
            <ReadingExperience></ReadingExperience>
            <Faq></Faq>
            <Review></Review>
        </div>
    );
};

export default HomeLayout;