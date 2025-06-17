import React, { Suspense } from 'react';
import UpdateBook from './UpdateBook';
import { useParams } from 'react-router';
import useBookDetailsApi from '../Api/useBookDetailsApi';
import Loading from '../components/Loading';

const UpdateBookPage = () => {
    const { BookDetailsData } = useBookDetailsApi()
    const params = useParams()
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <UpdateBook BookDetailsData={BookDetailsData(params.id)}></UpdateBook>
            </Suspense>
        </div>
    );
};

export default UpdateBookPage;