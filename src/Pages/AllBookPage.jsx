import React, { Suspense } from 'react';
import AllBook from './AllBook';
import useAllBookData from '../Api/useAllBookData';

const AllBookPage = () => {
    const { AllBookData } = useAllBookData()
    return (
        <div>
            <Suspense >
                <AllBook AllBookData={AllBookData()}></AllBook>
            </Suspense>
        </div>
    );
};

export default AllBookPage;