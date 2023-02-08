import React from 'react';
import './Header.css';
import { HiMenu } from "react-icons/hi";

const Header = () => {
    return (
        <div className="navbar flex justify-between">
            <div className="navbar-start">
                
                <a className="normal-case text-xl logo"><span className='logo-text'>Gym</span></a>
                        <h1 className='text mx-1'>baran</h1>
            </div>
            <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu/>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-30 mx-[-50px]">
                        <li><a>Home</a></li>
                        <li><a >Program</a></li>
                        <li><a >Blog</a></li>
                        <li><a >About us</a></li>
                    </ul>
                </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-black'>Home</a></li>
                    <li><a className='text-black'>Program</a></li>
                    <li><a className='text-black'>Blog</a></li>
                    <li><a className='text-black'>About us</a></li>
                </ul>
                <div>
                <a className="btn normal-case login-btn text-white">Log in</a>
            </div>
            </div>
            
        </div>
    );
};

export default Header;