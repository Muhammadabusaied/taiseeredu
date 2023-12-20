import React from 'react';
import Transection from './Transection';

const Transections = () => {
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
                    <Transection></Transection>
                    <Transection></Transection>
                    <Transection></Transection>
                    <Transection></Transection>
                    <Transection></Transection>
                </tbody>
            </table>
        </div>
    );
};

export default Transections;