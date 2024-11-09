import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-full'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;