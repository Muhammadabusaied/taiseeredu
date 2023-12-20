import React from 'react';
import Teacher from './Teacher';

const Teachers = () => {
    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 justify-items-center'>
            <Teacher></Teacher>
            <Teacher></Teacher>
            <Teacher></Teacher>
        </div>
    );
};

export default Teachers;