import React from 'react';
// import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';


const Root = () => {

    // const location = useLocation();

    // useEffect(() => {
    //     let customTitle;
    //     if (location.pathname === '/') {
    //         customTitle = 'Home';
    //     } else if (location.pathname === '/dashboard') {
    //         customTitle = 'Dashboard';
    //     } else if (location.pathname === '/statistics') {
    //         customTitle = 'Statistics';
    //     } else {
    //         customTitle = 'Gadget Heaven';
    //     }

    //     document.title = ` ${customTitle} | Gadget Heaven`;
    // }, [location.pathname]);

    return (
        <div className='w-full'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;