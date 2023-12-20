import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";

const ProfileNav = () => {
    return (
        <div>
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <ul className="menu bg-base-200 w-56 rounded-box">
                    <li>
                        <Link to='/profile/'>
                        <MdAccountCircle className='text-2xl' />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile/transections'>
                        <AiOutlineTransaction className='text-2xl' />
                            Transection
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile/enrollments'>
                        <GiArchiveRegister className='text-2xl' />
                            Enrollment
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileNav;