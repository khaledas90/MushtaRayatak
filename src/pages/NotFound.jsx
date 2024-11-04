import React from 'react'
import LottieHandler from '../component/Lottie/LottieHandler'
import data from '../assets/notFound.json'
export default function NotFound() {
    return (
        <>
            <div className="notFound py-10">
                <LottieHandler animationData={data} message="Page Not Found" />
            </div>
        </>
    )
}
