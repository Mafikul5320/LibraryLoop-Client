import React, { Suspense } from 'react';
import CategoryBookPage from './CategoryBookPage';
import useCategoryBookPageApi from '../Api/useCategoryBookPageApi';
import { useParams } from 'react-router';
import Loading from '../components/Loading';

const CategoryBookDataLoad = () => {
    const { CategoryBookData } = useCategoryBookPageApi()
    const params = useParams()
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <CategoryBookPage CategoryBookData={CategoryBookData(params.id)}></CategoryBookPage>
            </Suspense>
        </div>
    );
};

export default CategoryBookDataLoad;