import React from 'react';

const Banner = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-center text-5xl font-bold text-white mb-5'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='text-center text-base text-white'> Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="flex w-full justify-center">
                <button className='bg-white mt-5 rounded-lg py-2 px-4 font-bold text-purple-500 text-xl mx-auto btn border-none'>Shop Now</button>
            </div>

        </div>
    );
};

export default Banner;