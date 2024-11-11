import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import SeeDetail from './SeeDetail';

const Details = () => {
    const params = useParams();
    const { product_id } = params;
    const allData = useLoaderData();
    return (
        <div className="bg-gray-50 ">
            <div className=" p-1 mb-[420px] md:mb-72 lg:mb-48 xl:mb-72 xxl:mb-96 w-11/12 rounded-2xl mx-auto">
                <NavBar bg={''} text={'text-black'} color={'text-green-500'}></NavBar>
                <div className='w-full px-5 py-5 rounded-2xl bg-purple-500'>

                    <div className="w-11/12 mx-auto mb-64 mt-3">
                        <h1 className='text-white text-center text-3xl font-bold'> Product Details</h1>
                        <p className='w-full text-center mx-auto text-white text md:w-8/12'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <div className=" absolute w-4/5 md:w-3/5 lg:w-2/5 lg:w-3/5 md:top-[280px] top-[300px] left-1/2 -translate-x-1/2 border p-2 rounded-lg">
                    {/* <img className='rounded-lg w-full h-auto' src={'https://i.ibb.co.com/pLLP95q/banner.jpg'} alt="" /> */}

                    {
                        allData.map(data => data.product_id === product_id && <SeeDetail data={data}></SeeDetail>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;