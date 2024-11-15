import React from 'react';
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ bg, text, color = '' }) => {

    const link = <>
        <li className={`md:mr-1 font-bold ${color}`}><NavLink to="/">Home</NavLink></li>
        <li className={`md:mr-1 font-bold ${color}`}><NavLink to="/statistics">Statistics</NavLink></li>
        <li className={`md:mr-1 font-bold ${color}`}><NavLink to="/dashboard">Dashboard </NavLink></li>
    </>

    return (
        <div className={`navbar ${bg} rounded-2xl`}>
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
                <a className={`btn btn-ghost text-xl font-bold ${text} ${color}`}>Gadget Heaven</a>
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
                    <Link to={"/dashboard"} className='p-3 bg-white rounded-full hover:bg-green-400'><img className='w-5 h-5' src={`https://i.ibb.co.com/FwbHtBh/Frame.png`} alt="" /></Link>
                    <Link to={"/dashboard"} className='p-3 bg-white rounded-full hover:bg-green-400'><img className='w-5 h-5' src={`https://i.ibb.co.com/z4YL48K/Frame-1.png`} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;