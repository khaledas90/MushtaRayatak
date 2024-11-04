import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const clients = [
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 3,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
];


const ReviewSlider = () => {

    return (
        <div className="w-4/5 max-w-screen-xl mx-auto py-16" id="client">

            <div className="mt-8 relative">
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {clients.map(({ name, img_url, stars, disc }, index) => (
                        <SwiperSlide>
                            <div
                                key={index}
                                className="bg-gradient-to-br w-full min-w-full from-gray-800 to-gray-900 p-6 mx-2 rounded-lg shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-4xl text-teal-400 opacity-70">
                                        <IoIosQuote />
                                    </span>
                                    <div className="flex">
                                        {Array(stars)
                                            .fill()
                                            .map((_, i) => (
                                                <span
                                                    className="text-yellow-400 text-xl"
                                                    key={i}
                                                >
                                                    <AiOutlineStar />
                                                </span>
                                            ))}
                                    </div>
                                </div>
                                <p className="text-sm mb-6 text-white">{disc}</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={img_url}
                                        alt={name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="text-white">
                                        <h1 className="text-lg font-bold">{name}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default ReviewSlider;
