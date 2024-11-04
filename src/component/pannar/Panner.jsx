import React from 'react'

export default function Panner({ img, categoryType }) {
    return (
        <>
            <div className="">
                <div className="flex h-auto bg-[#efab31] m-7  px-4">
                    <div className="flex flex-col justify-center items-center w-1/2 p-10">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">{categoryType} Collection</h1>
                            <p className="text-lg leading-7">
                                Welcome to our store for all kinds of men's, children's and women's clothing
                            </p>
                            <button type="button" className='bg-[#eb423f] text-white font-bold mt-7 py-2 px-4 rounded'>Shop Now</button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={img} alt="" srcset="" /></div>
                </div>
            </div>
        </>
    )
}
