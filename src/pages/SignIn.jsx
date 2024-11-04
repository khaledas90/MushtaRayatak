import React from 'react'
import img from '../assets/loginIn.jpg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Login } from '../store/User';
export default function SignIn() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ email, password })
        dispatch(Login({ Email: email, Password: password }))
    }
    return (
        <>
            <div className="SignIn">
                <div className="flex py-28 w-full items-center justify-center bg-gray-100">
                    <div className="w-full max-w-[50%] overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
                        <div
                            className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-[50%]"
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <div className="w-full sm:w-[70%]">
                            <div className="p-8">
                                <h1 className="text-3xl font-black  mb-5 text-[#efab31]">Sign In</h1>
                                <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
                                    Welcome to our store for all kinds of men's, children's and women's clothing
                                </p>
                                <form className="mt-8" onSubmit={handleSubmit}>

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
                                        value="Sign In"
                                    />
                                </form>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">
                                        Don't have an account?{' '}
                                        <Link to='/register' className="font-bold text-blue-600 no-underline hover:text-blue-400">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

