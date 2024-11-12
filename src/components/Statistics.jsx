import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div className='bg-gray-50'>
            <Helmet>
                <title>Gadget Heaven | Statistits</title>
            </Helmet>
            <div className=" p-1 w-full">
                <NavBar bg={'bg-gray-50'} text={'text-black'} color={'text-purple-500'}></NavBar>
                <div className='w-full px-5 py-5  bg-purple-500'>
                    <div className="w-11/12 mx-auto py-3 mt-3">
                        <h1 className='text-white text-center text-3xl font-bold'> Dashboard </h1>
                        <p className='w-full text-center mx-auto text-white text md:w-8/12'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <div className="w-full py-8 ">
                    <p className='text-xl font-bold text-black'>Statistics</p>
                    <h1 className='text-7xl py-20 font-bold text-purple-500 text-center'> No Data to Show Statistics</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Statistics;