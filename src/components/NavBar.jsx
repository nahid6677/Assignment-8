import React from 'react';
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {

    const link = <>
        <li className='md:mr-1 font-bold '><NavLink to="/">Home</NavLink></li>
        <li className='md:ml-1 font-bold '><NavLink  to="zzz">Statistics</NavLink></li>
        <li className='md:ml-1 font-bold '><NavLink to="">Dashboard </NavLink></li>
    </>

    return (
        <div className="navbar bg-purple-500 rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-white">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2 md:mr-5">
                    <Link className='p-3 bg-white rounded-full'><img className='w-5 h-5' src={`https://i.ibb.co.com/FwbHtBh/Frame.png`} alt="" /></Link>
                    <Link className='p-3 bg-white rounded-full'><img className='w-5 h-5' src={`https://i.ibb.co.com/z4YL48K/Frame-1.png`} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;