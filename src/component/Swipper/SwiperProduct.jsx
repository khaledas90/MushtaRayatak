
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/grid';



const SwiperProduct = ({ images }) => {


    return (
        <>
            <div className="container">
                <div className="swiper_Main">
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="w-[100%] flex justify-center bg-white p-5 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[100%] flex justify-center bg-white p-5 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[100%] flex justify-center bg-white p-5 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper_thumb">
                    <Swiper
                        slidesPerView={3}
                        grid={{ rows: 1 }}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                        className="mySwiper_thumb"
                    >
                        <SwiperSlide>
                            <div className="w-[100%] bg-white  p-2 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[100%] bg-white  p-2 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[100%] bg-white p-2 shadow-md">
                                <img src={images} className='w-[80%]' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}


export default SwiperProduct;
