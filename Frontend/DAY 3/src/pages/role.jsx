import React from "react";
import '../assets/css/role.css';
import admin from '../assets/images/profile-image.png';
import user from '../assets/images/profile-image.png';
import { Link } from "react-router-dom";

function Role() {
    return (
        <div className="role">
            
            <div className="role-card">
                <Link className='r' to='/admin'>
                <img src={admin} alt="Admin" />
                <br></br>
                <br></br>
                <h2 >Admin</h2>
                </Link>
            </div>
            <div className="role-card">
                <Link className='r' to='/login'>
                <img src={user} alt="User" />
                    <br></br>
                    <br></br>
                <h2>User</h2>
                </Link>
            </div>
        </div>
    );
}

export default Role;