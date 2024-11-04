import React from 'react';
import offer_img from '../../assets/offer-bg.png';
export default function Offer() {
  return (
    <section className="offer py-6 my-5" style={{ backgroundImage: `url(${offer_img})` , backgroundSize: 'cover' }}>
      <div className="container mx-auto">
        <div className="flex lg:justify-end md:justify-end justify-center lg:pr-[190px] py-5 px-4 lg:py-[70px] md:pr[150px] md:py-[50px]">
          <div className="text-center  max-w-md">
            <h3 className="text-uppercase text-[40px] mb-8">All Men’s Collection</h3>
            <h2 className="text-uppercase text-[45px] font-extrabold mb-8"><span className='text-[#eb423f]'>50%</span> Off</h2>
            <a href="#" className="inline-block bg-[#efab31] text-white py-2 px-6 rounded-sm text-lg font-semibold hover:bg-transparent border border-[#efab31] hover:text-[#c4943b] hover:border hover:border-[#eb423f] transition duration-500">Discover Now</a>
            <p className="mt-5 text-gray-600">Limited Time Offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
