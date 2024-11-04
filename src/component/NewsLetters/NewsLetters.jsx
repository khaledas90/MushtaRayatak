import React from 'react';
import NewsLetters_img from '../../assets/newLetter.jpg';

export default function NewsLetters() {
  return (
    <>
      <div
        className="relative NewsLetters mx-10 my-5 py-20"
        style={{
          backgroundImage: `url(${NewsLetters_img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay absolute inset-0 bg-[#1e1e1e] bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Newsletter</h3>
            <p className="text-lg font-light text-white mb-6">
              Subscribe to our newsletter & get <span className="text-[#ffb732]">10% off</span> on your next purchase.
            </p>
            <div className="my-3">
            <input
            type="text"
            class="w-[40%] h-10 mb-4 bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text" />
            </div>
            <a
              href="#"
              className="inline-block mb-4 bg-[#efab31] text-white py-2 px-6 rounded-sm text-lg font-semibold hover:bg-[#eb423f] transition duration-500"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
