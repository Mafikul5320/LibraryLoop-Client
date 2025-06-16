import React, { Suspense } from 'react';
import UpdateBook from './UpdateBook';
import { useParams } from 'react-router';
import useBookDetailsApi from '../Api/useBookDetailsApi';

const UpdateBookPage = () => {
    const { BookDetailsData } = useBookDetailsApi()
    const params = useParams()
    return (
        <div>
            <Suspense>
                <UpdateBook BookDetailsData={BookDetailsData(params.id)}></UpdateBook>
            </Suspense>
        </div>
    );
};

export default UpdateBookPage;