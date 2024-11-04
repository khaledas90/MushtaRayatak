import React from 'react';

import hero_img from '../../assets/banner-bg.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import Items from '../items/items';
export default function Hero() {
  return (
    <section className="hero relative bg-cover bg-center bg-no-repeat min-h-[790px] mb-40" style={{ backgroundImage: `url(${hero_img})`, backgroundSize: 'cover' }}>


      <div className="container mx-auto px-4">
        <div className="text-start mt-[30px] ml-[50px]">
          <p className="text-xs font-medium text-white uppercase mb-3 mt-3">New Collection</p>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            <span className="text-[#efab31]">Show</span> Your <br />Personal <span className="text-[#efab31]">Style</span>
          </h3>
          <h4 className="text-lg font-light text-white mb-0">Fowl saw dry which a above together place.</h4>

          <a href="#" className="inline-flex items-end  mt-11 px-10 py-3 text-sm font-semibold text-white bg-[#efab31] rounded-md shadow-lg hover:bg-[#eb423f] transition">View Collection
            <FaLongArrowAltRight className="ml-3 text-[20px]" />
          </a>


        </div>
      </div>

    </section>

  );
}
