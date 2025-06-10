import React from 'react';
import Banner from '../Home/Banner';
import BookCategories from '../Home/BookCategories';
import OurNumber from '../Home/OurNumber';
import ChooseLibraryLoop from '../Home/ChooseLibraryLoop';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <ChooseLibraryLoop></ChooseLibraryLoop>
            <OurNumber></OurNumber>
        </div>
    );
};

export default HomeLayout;