import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';
import HeadProductDetails from '../headProductDetails/headProductDetails';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import SwiperProduct from '../Swipper/SwiperProduct';
import ProductDescription from '../ProductDescription/ProductDescription';
import { Toaster } from 'react-hot-toast';

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [showHeart, setShowHeart] = useState(false);
    const { addToWishlist, removeFromWishlist, wishlistItems, addToCart, allProduct } = useContext(ShopContext);
    const { id } = useParams(); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setShowHeart(savedWishlist.some(item => item.id === Number(id)));
    }, [id, wishlistItems]); 

  
    if (!Array.isArray(allProduct)) {
        console.error('allProduct is not an array:', allProduct);
        return <p>Products data is not available</p>;
    }

   
    const product = allProduct.find(item => item.id === Number(id));

   
    if (!product) {
        return <p>Product not found</p>;
    }

    const increaseQuantity = () => setQuantity(prevQty => prevQty + 1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQty => prevQty - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product.id, quantity);
    };

    const handleAddToWishlist = () => {
        addToWishlist(product.id);
        setShowHeart(true);
    };

    const handleRemoveFromWishlist = () => {
        removeFromWishlist(product.id);
        setShowHeart(false);
    };


    return (
        <div className="product">
            <HeadProductDetails title={"Product Details"} />
            <div className="flex justify-center">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2   ">
                        <div className="col-span-1 mx-4">
                            <div className=" flex items-center justify-center px-3 py-7 ">
                                <div className="w-[100%] bg-white p-5 shadow-md">
                                    <SwiperProduct images={product.image} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 mx-4">
                            <div className=" flex items-center justify-center px-3 py-7 ">
                                <div className=" w-full lg:ml-auto ">
                                    <div className="text-left px-4 py-5">
                                        <h3 className="text-[20px] md:text-[28px] text-[#efab31]  font-bold mb-2 mt-3 ">{product.name}</h3>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-4">${product.new_price} <span className="text-base text-gray-500 line-through">${product.old_price}</span></h2>
                                        <ul className="list-none p-0 mb-4">
                                            <li className="my-5">
                                                <span className="text-gray-600 ">
                                                    <span className="font-semibold">Category</span>: {product.category}
                                                </span>
                                            </li>
                                            <li className='my-5'>
                                                <span className="text-gray-600 mt-5">
                                                    <span className="font-semibold">Availability</span>: In Stock
                                                </span>
                                            </li>
                                            <li className='my-5'>
                                                <span className="text-gray-600 mt-5">
                                                    <span className="font-semibold">Description</span>:
                                                    Mill Oil is an innovative oil filled radiator with the most modern technology.
                                                    If you are looking for something that can make your interior look awesome,
                                                    and at the same time give you the pleasant warm feeling during the winter.
                                                </span>
                                            </li>
                                            <li className='my-5'>
                                                <span className="text-gray-600 mt-5 flex ">
                                                    <span className="font-semibold ">Size</span>:
                                                    <ul className='list-none flex ml-5'>
                                                        <li className='mr-5 bg-[#aeaeae] py-1 px-2 text-white '>S</li>
                                                        <li className='mr-5 bg-[#aeaeae] py-1 px-2 text-white '>M</li>
                                                        <li className='mr-5 bg-[#aeaeae] py-1 px-2 text-white '>L</li>
                                                        <li className='mr-5 bg-[#aeaeae] py-1 px-2 text-white '>XL</li>
                                                        <li className='mr-5 bg-[#aeaeae] py-1 px-2 text-white '>XXL</li>
                                                    </ul>
                                                </span>
                                            </li>
                                        </ul>

                                        <div className="inline-block relative items-center mb-4 ">
                                            <label htmlFor="qty" className="mr-2">Quantity:</label>
                                            <input
                                                type="text"
                                                name="qty"
                                                id="sst"
                                                maxLength="12"
                                                value={quantity}
                                                title="Quantity:"
                                                className="border text-center w-[100px] py-2 px-2 "
                                                readOnly
                                            />

                                            <button
                                                onClick={increaseQuantity}
                                                className=" p-1 ml-2 absolute left-[142px] text-[rgb(104 104 104)] text-[12px]"
                                                type="button"
                                            >
                                                <FaChevronUp />
                                            </button>
                                            <button
                                                onClick={decreaseQuantity}
                                                className=" p-1 ml-2 absolute left-[142px] text-[rgb(104 104 104)] top-5 text-[12px]"
                                                type="button"
                                            >
                                                <FaChevronDown />
                                            </button>

                                        </div>

                                        <div className="flex space-x-4 my-5 mx-5 align-center items-center">
                                            <button onClick={handleAddToCart} className="bg-[#efab31] transition-all duration-300 hover:bg-transparent hover:border-[#efab31] hover:text-[#000] border border-[#efab31]  text-white py-2 px-4 rounded">Add to Cart</button>
                                            <a href="#" className="text-gray-600 text-[25px]">
                                                <IoDiamondOutline />
                                            </a>
                                    
                                            {showHeart ? (
                                                <span
                                                    className="m-2 rounded-full px-2 text-center text-[29px] cursor-pointer font-medium text-white hover:text-red-600 transition-all duration-300"
                                                    onClick={handleRemoveFromWishlist}
                                                >
                                                    <IoMdHeart className='text-red-600' />
                                                </span>
                                            ) : (
                                                <span
                                                        className=" m-2 rounded-full px-2 text-center text-[29px] cursor-pointer font-medium  hover:text-red-600 text-black transition-all duration-300"
                                                    onClick={handleAddToWishlist}
                                                >
                                                    <IoHeartOutline />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductDescription />
                </div>
                <Toaster />
            </div>


        </div>
    );
}
