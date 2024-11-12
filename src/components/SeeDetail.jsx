import React from 'react';
// import { Link } from 'react-router-dom';
import { addCartToLocalSorage, addfabriteToLocalSorage } from '../utility/LocalStorse.js'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const SeeDetail = ({ data }) => {
    const handleCart = (id) => {
        addCartToLocalSorage(id)
    }
    const handleFabrite = (id) => {
        addfabriteToLocalSorage(id)
    }
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = data;
    return (
        <div className='w-full h-full md:grid bg-white grid-cols-3 py-5 rounded-lg'>
           <Helmet>
                <title>
                Gadget Heaven | See Details {product_id}
                </title>
           </Helmet>
            <div className="col-span-1 flex items-center p-2 justify-center"><img
                src={product_image}
                alt={product_title}
                className="rounded-xl h-48 w-full xl:h-[220px]" /></div>
            <div className="col-span-2 rounded-xl md:mt-0 mt-2 bg-white px-3 py-1 flex flex-col gap-1">
                <h2 className='text-black text-xl'>{product_title}</h2>
                <p className=' text-black'>Price: {price}</p>
                <p className='border w-24 text-center text-green-600 border-green-500 px-2 rounded-3xl bg-green-100'>{availability ? "In Stock" : "Out of Stock "}</p>
                <p>{description}</p>
                <p className='font-bold text-black'>Specification:</p>
                <div className="">
                    {
                        specification?.map(item => <p className='text-black'>{item}</p>)
                    }
                </div>
                <p className='font-bold text-black'>Ratting: </p>
                <div className="flex gap-4">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <h3 className='text-black text-xl'>{rating}</h3>
                </div>
                <div className="flex gap-3 items-center">
                    <button onClick={() => handleCart(product_id)} className='btn text-black text-xl bg-white hover:bg-purple-600 hover:text-white'><span className='flex gap-2 items-center'><h3>Add To Card</h3> <img className='w-5 hover:text-white h-5' src={`https://i.ibb.co.com/z4YL48K/Frame-1.png`} alt="" /></span></button>
                    <button onClick={() => handleFabrite(product_id)} className='py-3 px-[13px] hover:bg-purple-600 btn bg-white rounded-full'><img className='w-5 h-5' src={`https://i.ibb.co.com/FwbHtBh/Frame.png`} alt="" /></button>
                </div>

            </div>
        </div>
    );
};

export default SeeDetail;