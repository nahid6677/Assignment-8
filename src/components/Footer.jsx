import React from 'react';

const Footer = () => {
    return (
        <div className='w-full py-8 bg-white mt-5'>
            <div className="w-11/12 mx-auto">
                <h2 className="text-2xl text-center font-bold text-black">Gadget Heaven</h2>
                <p className='text-center py-3'>Leading the way in cutting-edge technology and innovation.</p>
                <div className="border-t-1 my-5 border"></div>
                <div className="flex w-10/12 justify-around mx-auto">
                    <div className="">
                        <h3 className='text-xl text-center text-black font-bold'>Services</h3>
                        <p className='text-center'>Product Support</p>
                        <p className='text-center'>Order Tracking</p>
                        <p className='text-center'>Shipping & Delivery</p>
                        <p className='text-center'>Returns</p>
                    </div>
                    <div className="">
                        <h3 className='text-xl text-center text-black font-bold'>Services</h3>
                        <p className='text-center'>Product Support</p>
                        <p className='text-center'>Order Tracking</p>
                        <p className='text-center'>Shipping & Delivery</p>
                        <p className='text-center'>Returns</p>
                    </div>
                    <div className="">
                        <h3 className='text-xl text-center text-black font-bold'>Services</h3>
                        <p className='text-center'>Product Support</p>
                        <p className='text-center'>Order Tracking</p>
                        <p className='text-center'>Shipping & Delivery</p>
                        <p className='text-center'>Returns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;