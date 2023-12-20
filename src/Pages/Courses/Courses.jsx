import React from 'react';
import Course from './Course';

const Courses = () => {
    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 justify-items-center'>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
    );
};

export default Courses;