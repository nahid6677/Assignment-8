import React, { useState } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {

    const loadData = useLoaderData();
    const [products, setProducts] = useState(loadData)

    const handleLaptop = () => {
        setProducts(loadData.filter(product => product.category === "Laptops"))
    }
    const handlePhones = () => {
        setProducts(loadData.filter(product => product.category === "Smartphones"))
    }
    const handleaccessories = () => {
        setProducts(loadData.filter(product => product.category === "Accessories"))
        // console.log(products.length)
    }
    const handleSmartWatch = () => {
        setProducts(loadData.filter(product => product.category === "Smartwatches"))
    }
    const handleMackBook = () => {
        setProducts(loadData.filter(product => product.category === "Tablets"))
    }
    const handleIphone = () => {

        setProducts(loadData.filter(product => product.product_title.includes('iPhone')))
    }


    // console.log(loadData)

    return (
        <div className="bg-gray-50 pt-5 ">
            <div className=" p-1  w-11/12 rounded-2xl mx-auto">
                <div className='w-full px-5 py-5 rounded-2xl bg-purple-500'>
                    <NavBar></NavBar>
                    <div className="w-11/12 mx-auto mb-64">
                        <Banner></Banner>
                    </div>
                </div>
                <div className="absolute w-48 sm:w-3/5 lg:w-2/5 top-[420px] left-1/2 -translate-x-1/2 border p-2 rounded-lg">
                    <img className='rounded-lg w-full h-auto' src={'https://i.ibb.co.com/pLLP95q/banner.jpg'} alt="" />
                </div>

                <main className='mt-72 py-6 sm:flex gap-3 xl:gap-8'>
                    <div className="flex flex-col items-center p-3 ">
                        <div className="border py-6 px-3 bg-white gap-3  rounded-lg flex flex-col items-center">
                            <button onClick={() => setProducts(loadData)} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>All Product</button>
                            <button onClick={handleLaptop} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>Laptops</button>
                            <button onClick={handlePhones} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>Phones</button>
                            <button onClick={handleaccessories} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>Accessories</button>
                            <button onClick={handleSmartWatch} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>Smart Watches</button>
                            <button onClick={handleMackBook} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>MacBook</button>
                            <button onClick={handleIphone} className='btn text-black bg-gray-300 hover:bg-primary hover:text-white text-lg rounded-3xl px-2 w-48'>Iphone</button>
                        </div>
                    </div>
                    <div className={`w-full ${products.length ? 'grid' : 'flex items-center'} gap-2 xl:gap-8 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                        {
                            products.length ? products.map(data => <Card key={data.product_id} data={data}></Card>) : <div className='w-full'> <h2 className='text-xl sm:text-3xl md:text-7xl text-black text-center font-bold'>Products Not Found!!!</h2></div>
                        }
                    </div>

                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;