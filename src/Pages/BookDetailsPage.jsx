import React, { Suspense } from 'react';
import useBookDetailsApi from '../Api/useBookDetailsApi';
import BookDetails from './BookDetails';
import { useParams } from 'react-router';

const BookDetailsPage = () => {
    const { BookDetailsData } = useBookDetailsApi()
    const params = useParams()
    return (
        <div>
            <Suspense>
                <BookDetails BookDetailsData={BookDetailsData(params.id)}></BookDetails>
            </Suspense>
        </div>
    );
};

export default BookDetailsPage;