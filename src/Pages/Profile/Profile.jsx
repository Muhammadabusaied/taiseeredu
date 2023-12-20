import React from 'react';
import ProfileNav from './ProfileNav';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <ProfileNav></ProfileNav>
                    <div className="divider lg:divider-horizontal"></div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Profile;