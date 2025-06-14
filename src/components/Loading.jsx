import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <span className="loading loading-bars loading-xl"></span>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;