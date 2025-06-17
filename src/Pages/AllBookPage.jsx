import React, { Suspense } from 'react';
import AllBook from './AllBook';
import useAllBookData from '../Api/useAllBookData';
import Loading from '../components/Loading';

const AllBookPage = () => {
    const { AllBookData } = useAllBookData()
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <AllBook AllBookData={AllBookData()}></AllBook>
            </Suspense>
        </div>
    );
};

export default AllBookPage;