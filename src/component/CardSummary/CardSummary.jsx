import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CartSummary = (Total) => {
    const [valInput, setValInput] = React.useState('');
    const [discount, setDiscount] = React.useState(Total.total);
    const [isDiscount, setIsDiscount] = React.useState(false);
    console.log(Total.total);

    const handleClick = () => {
        if (valInput == 'Khaled90') {
            setValInput('Khaled90');
            setIsDiscount(true);
            toast.success('Coupon Applied Successfully');
            setDiscount(Total.total - 50);
        }
    }

    return (
        <div className="py-6 px-4 space-y-6">
            <div className="flex justify-between items-center border-t border-gray-200 pt-4 px-5">
                <div class="w-full text-center py-4 lg:px-4">
                    <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                        <span class="font-semibold mr-2 text-left flex-auto">Get Free Shipping on Orders $50+ by Coupon Code 'Khaled90'</span>
                        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                    </div>
                </div>
            </div>
            <div className="block  md:flex lg:flex justify-between  items-center border-t border-gray-200 pt-4 px-5">
                <div className="flex items-center justify-center mt-3 space-x-10 ">
                    <input type="text" placeholder="Coupon Code" value={valInput} onChange={e => setValInput(e.target.value)} className="border border-gray-300 px-2 py-1 rounded" />
                    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">Apply</button>
                </div>
                <div className="flex items-center  justify-center lg:justify-end mt-3 space-x-10 ">
                    <h5 className="text-lg font-medium">Subtotal</h5>
                    <h5 className="text-lg font-medium"> ${isDiscount ? discount : Total.total}</h5>
                </div>
            </div>
            <div className="lg:flex md:flex grid m-auto gap-2  justify-between items-center border-t border-gray-200 pt-4">
                <Link to='/product' className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Continue Shopping</Link>
                <Link to='/checkout' className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to checkout</Link>
            </div>
        </div>
    );
};

export default CartSummary;
