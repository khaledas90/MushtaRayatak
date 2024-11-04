import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/signUp.jpg';
import { useDispatch } from 'react-redux';
import { Register } from '../store/User';
import { Toaster } from 'react-hot-toast';
export default function SignUp() {
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, email, password });
        dispatch(Register({ name, email, password }));
    }
    return (
        <>
            <div className="SignUp bg-gray-600">
                <div className="flex py-28 w-full items-center justify-center bg-gray-100">
                    <div className="w-full max-w-[50%] overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
                        <div
                            className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-[50%]"
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <div className="w-full sm:w-[70%]">
                            <div className="p-8">
                                <h1 className="text-3xl font-black  mb-5 text-[#efab31]">Sign up</h1>
                                <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
                                    Create an account to get access and buy any product
                                </p>
                                <form className="mt-8" onSubmit={handleSubmit}>
                                    <div className="relative mt-2 mb-4 w-full">
                                        <input
                                            type="text"
                                            id="name"
                                            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="Name"
                                            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                        >
                                            Enter Your Name
                                        </label>
                                    </div>
                                    <div className="relative my-4 w-full">
                                        <input
                                            type="text"
                                            id="email"
                                            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="Email"
                                            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                        >
                                            Enter Your Email
                                        </label>
                                    </div>
                                    <div className="relative mt-2 w-full">
                                        <input
                                            type="text"
                                            id="password"
                                            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                        >
                                            Enter Your Password
                                        </label>
                                    </div>
                                    <input
                                        className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400"
                                        type="submit"
                                        value="Create account"
                                    />
                                </form>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{' '}
                                        <Link to='/login' className="font-bold text-blue-600 no-underline hover:text-blue-400">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Toaster />
                    </div>
                </div>
            </div>
        </>
    );
}
