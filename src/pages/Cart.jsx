import React, { useContext, useState } from 'react';
import HeadProductDetails from '../component/headProductDetails/headProductDetails';
import { MdDeleteOutline } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
import LottieHandler from '../component/Lottie/LottieHandler';
import CartEmpty from '../assets/empty cart.json'
import toast, { Toaster } from 'react-hot-toast';
import CartSummary from '../component/CardSummary/CardSummary';
export default function Cart() {

    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(ShopContext);

    const TotalSalary = cartItems.reduce((accumulator, currentElement) => {
        console.log(accumulator, currentElement.new_price, currentElement.quantity);
        return accumulator + currentElement.new_price * currentElement.quantity
    }, 0)
    console.log(TotalSalary);

    return (
        <div className="Cart">
            <HeadProductDetails title={"Cart"} />

            <div className="flex justify-center items-center ">
                <div className="container">
                    <div className="mt-8 pb-8 pl-5 pr-5 w-full overflow-x-auto">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-center bg-transparent ">
                                <thead className="bg-gray-500 w-full">
                                    <tr>
                                        <th className="px-6 py-3 text-sm font-medium text-white">Product</th>
                                        <th className="px-6 py-3 text-sm font-medium text-white">Price</th>
                                        <th className="px-6 py-3 text-sm font-medium text-white">Quantity</th>
                                        <th className="px-6 py-3 text-sm font-medium text-white">Total</th>
                                        <th className="px-6 py-3 text-sm font-medium text-white">remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length > 0 ? cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="flex items-start">
                                                    <div className="pr-8">
                                                        <img src={item.image} alt={item.name} className="border border-gray-300 rounded w-24" />
                                                    </div>
                                                    <div className="self-center">
                                                        <p className="mb-0">{item.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5 className="text-sm text-gray-800">{`$${item.new_price},00`}</h5>
                                            </td>
                                            <td>
                                                <div className="relative inline-block mb-6">
                                                    <input
                                                        type="text"
                                                        name="qty"
                                                        maxLength={4}
                                                        title="Quantity:"
                                                        className={`input-text qty w-24 pl-8 h-10 border border-gray-300 rounded ${item.quantity === 4 ? "border-danger" : ""}`}
                                                        value={item.quantity}
                                                        readOnly
                                                    />
                                                    <button className="absolute right-1 top-0 items-count text-[14px] text-[#333]" type="button" onClick={() => item.quantity < 4 ? increaseQuantity(item.id) : (toast.error('Max quantity is 4', {
                                                        position: 'top-center',
                                                        autoClose: 1000,
                                                    }))}>
                                                        <FaChevronUp />
                                                    </button>
                                                    <button className="absolute right-1 bottom-0 items-count text-[14px] text-[#333]" type="button" onClick={() => item.quantity > 1 ? decreaseQuantity(item.id) : (toast.error('Min quantity is 1', {
                                                        position: 'top-center',
                                                        autoClose: 1000,
                                                    }))}>
                                                        <FaChevronDown />
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <h5 className="text-sm text-gray-800">${item.new_price * item.quantity},00</h5>
                                            </td>
                                            <td>
                                                <div className="flex justify-center">
                                                    <MdDeleteOutline style={{ textAlign: 'center' }} onClick={() => removeFromCart(item.id)} className="text-lg font-normal cursor-pointer transition-all duration-400 hover:text-red-600" />

                                                </div>
                                            </td>
                                        </tr>
                                    )) :
                                        <tr>
                                            <td colSpan={5}>
                                                <LottieHandler animationData={CartEmpty} message="Your cart is empty" />
                                            </td>
                                        </tr>
                                    }

                                </tbody>

                            </table>

                        </div>
                        <CartSummary total={TotalSalary} />
                        <Toaster />
                    </div>
                </div>
            </div>



        </div >
    );
}
