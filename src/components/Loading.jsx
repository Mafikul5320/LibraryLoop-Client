import Lottie from 'lottie-react';
import React from 'react';
import loader from '../../public/loading.json'

const Loading = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="w-64 h-64">
                <Lottie animationData={loader} loop={true} />
            </div>
        </div>
    );
};

export default Loading;