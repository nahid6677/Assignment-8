import React from 'react';

const Card = ({ data }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = data;
    return (
        <div className="card bg-white w-full xl:w-4/5 mx-auto shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-full h-48 xl:h-[220px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-black font-bold">{product_title}</h2>
                <p className='text-black text-lg font-bold '>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn rounded-3xl bg-gray-50 text-purple-500 border-b-red-400 border border-purple-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;