import React, { Suspense } from 'react';
import CategoryBookPage from './CategoryBookPage';
import useCategoryBookPageApi from '../Api/useCategoryBookPageApi';
import { useParams } from 'react-router';

const CategoryBookDataLoad = () => {
    const { CategoryBookData } = useCategoryBookPageApi()
    const params = useParams()
    return (
        <div>
            <Suspense>
                <CategoryBookPage CategoryBookData={CategoryBookData(params.id)}></CategoryBookPage>
            </Suspense>
        </div>
    );
};

export default CategoryBookDataLoad;