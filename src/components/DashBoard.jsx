import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { addCartToLocalSorage, getCartFromLocalStore, getfavouriteFromLocalStore } from '../utility/LocalStorse';
import CartProduct from './CartProduct';
import FavouriteProduct from './FavouriteProduct';
const DashBoard = () => {

    const [favourite, usefavourite] = useState([])
    const [cardData, setCartData] = useState([])
    const [use, setuse] = useState(0)
    const loadData = useLoaderData();


    const handleCartData = (id) => {
        setCartData(cardData.filter(pro => pro.product_id !== id));
        const x = cardData.map(pro => pro.product_id)
        const arrStr = JSON.stringify(x.filter(pro => pro !== id))
        // console.log(arrStr)
        localStorage.setItem('cart', arrStr)

    }
    const handlefavouriteData = (id) => {
        usefavourite(favourite.filter(pro => pro.product_id !== id));
        const x = favourite.map(pro => pro.product_id);
        const arrStr = JSON.stringify(x.filter(pro => pro !== id))
        localStorage.setItem('favourite', arrStr)
        // console.log('kkk')
    }
    const handlefavouriteD = (id) => {
        addCartToLocalSorage(id)
        const fromLocalStorage = getCartFromLocalStore();
        const spesificsData = loadData.filter(product => fromLocalStorage.includes(product.product_id))
        setCartData(spesificsData)

    }
    const handleSortPrice = () => {
        const sort = cardData.map(pr => pr.price).sort((a, b) => a - b);
        let vv = []
        for (const item of cardData) {
            for (const itm of sort) {
                if (item.price === itm) {

                    vv.push(item)
                }
            }
        }
        setCartData(vv.reverse())
    }
    const handlePurchase = () => {
        localStorage.setItem('cart', [])
        setuse(cardData.map(pro => pro.price).reduce((a, b) => a + b, 0))
        setCartData([])
        // console.log('gggggggg')
    }

    useEffect(() => {
        const fromLocalStorage = getCartFromLocalStore();
        const spesificsData = loadData.filter(product => fromLocalStorage.includes(product.product_id))
        setCartData(spesificsData)
        const favouriteSotr = getfavouriteFromLocalStore()
        usefavourite(loadData.filter(product => favouriteSotr.includes(product.product_id)))
    }, [])

    return (
        <div className="bg-gray-50 ">

            <div className=" p-1 w-full ">
                <NavBar bg={'bg-gray-50'} text={'text-black'} color={'text-purple-500'}></NavBar>
                <div className='w-full px-5 py-5  bg-purple-500'>

                    <div className="w-11/12 mx-auto py-3 mt-3">
                        <h1 className='text-white text-center text-3xl font-bold'> Dashboard </h1>
                        <p className='w-full text-center mx-auto text-white text md:w-8/12'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <Tabs>
                    <TabList className={'bg-purple-500 w-full flex justify-center py-6'}>
                        <div className="flex gap-5">
                            <Tab className="py-2 px-8 btn rounded-3xl text-black text-xl font-bold bg-gray-200 hover:text-white hover:bg-blue-500"
                                selectedClassName="text-blue-500">Cart</Tab>
                            <Tab className="py-2 px-4 btn rounded-3xl text-black text-xl font-bold bg-gray-200 hover:text-white hover:bg-blue-500"
                                selectedClassName={"text-blue-500 "}>Wishlist</Tab>
                        </div>
                    </TabList>

                    <TabPanel className={'w-full flex justify-center'}>

                        <div className="mx-auto w-2/3 ">
                            <div className="w-full py-4 flex justify-between items-center border-b-2 mb-5">
                                <h3 className='text-black font-bold text-2xl '>Cart</h3>
                                <div className="flex gap-2 items-center">
                                    <h4 className='text-black font-bold'>Total cost: {cardData.map(pro => pro.price).reduce((a, b) => a + b, 0)}</h4>
                                    <button onClick={handleSortPrice} className='btn bg-white border-none hover:bg-white'><span className='flex gap-2 items-center'><h2 className='text-xl text-purple-500'>Sort by Price</h2> <img src={'https://i.ibb.co.com/jLzXNfZ/Frame-2.png'} alt="" /></span></button>
                                    {/* <button onClick={handlePurchase} className='btn bg-purple-500 border-none hover:bg-white text-white font-bold hover:text-black'>Purchase</button> */}
                                    <label onClick={handlePurchase} htmlFor="my_modal_6" className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${cardData.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={cardData.length === 0}>Purchase</label>
                                </div>
                            </div>
                            {
                                cardData.map((product, x) => <CartProduct key={x} product={product} handleCartData={handleCartData}></CartProduct>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel className={'w-full flex justify-center mt-10'}>
                        <div className="mx-auto w-2/3 ">
                            {favourite.map((product, x) => <FavouriteProduct key={`${x}54`} product={product} handlefavouriteData={handlefavouriteData} handlefavouriteD={handlefavouriteD}></FavouriteProduct>)}
                        </div>
                    </TabPanel>
                </Tabs>

            </div>
            <Footer></Footer>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                    <div className="py-8">
                        <img className='mx-auto mb-4' src={'https://i.ibb.co.com/ncbqgBH/x32-0-Success.png'} alt="" />
                        <h3 className="text-2xl text-black text-center font-bold">{use === 0 ? 'Please add product in the cart' : 'Payment Successfully'}</h3>
                        <p className="py-4 text-black text-center">{use === 0 ? '' : 'Thanks for purchasing.'}<br />
                            <span className='font-bold'>Total: {use}</span></p>
                    </div>
                    <div className="modal-action w-full">
                        <label htmlFor="my_modal_6" className="btn w-full text-black text-xl hover:bg-white bg-gray-300">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;