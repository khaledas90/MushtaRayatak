import React from 'react'
import Lottie from "lottie-react";
export default function LottieHandler({ animationData, message }) {
    return (
        <>
            <div className="LottieHandler">
                <div className={`   `}>
                    <Lottie animationData={animationData} className='w-[400px] flex m-auto' />
                    {message && <h3 className="text-center text-[#aeaeae] text-[28px] mt-2" >{message}</h3>}
                </div>
            </div>
        </>
    )
}
