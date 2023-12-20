import React from 'react';
import Enrolment from './Enrolment';

const Enrollments = () => {
    return (
        <div className="">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Enrolment></Enrolment>
                    <Enrolment></Enrolment>
                    <Enrolment></Enrolment>
                </tbody>
                </table>
        </div>
    );
};

export default Enrollments;