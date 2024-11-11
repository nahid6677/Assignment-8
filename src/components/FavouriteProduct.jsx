import React from 'react';

const FavouriteProduct = ({ product, handlefavouriteData,handlefavouriteD }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;
    return (
        <div className="w-full bg-white grid grid-cols-4 gap-2 my-2 border rounded-lg">
            <div className="col-span-1 h-48">
                <img className="w-full h-full rounded-lg" src={product_image} alt="" />
            </div>
            <div className="col-span-3 h-48 px-2 flex gap-2 items-center w-full justify-between">
                <div>
                    <h2 className="text-black text-xl font-bold">{product_title}</h2>
                    <p>{description}</p>
                    <p className="text-black">Price: {price}</p>
                    <button onClick={() => handlefavouriteD(product_id)} className='btn mt-5 text-black text-xl bg-white hover:bg-purple-600 hover:text-white'><span className='flex gap-2 items-center'><h3>Add To Card</h3> <img className='w-5 hover:text-white h-5' src={`https://i.ibb.co.com/z4YL48K/Frame-1.png`} alt="" /></span></button>
                </div>
                <button
                    onClick={() => handlefavouriteData(product_id)}
                    className="btn bg-white border-none py-0 px-1 rounded-full mr-3 hover:bg-white"
                >
                    <img className="w-8 h-8" src="https://i.ibb.co/5456jdv/Group-2.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default FavouriteProduct;
