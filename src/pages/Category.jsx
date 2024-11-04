import React from 'react'
import { Link } from 'react-router-dom'
import imgMan from '../assets/man.jpg'
import imgWoman from '../assets/woman.jpg'
import imgKid from '../assets/childern.jpg'
export default function Category() {
  return (
    <>
          <div className="Category py-24 px-10">
            <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <Link to={'/categories/man'}>
                          <div className="card bg-base-100 w-96 rounded-lg transform-all duration-300 hover:scale-105 shadow-xl">
                              <figure>
                                  <img
                                      src={imgMan}
                                      alt="Shoes" />
                              </figure>
                              <div className="card-body text-center">
                                  <h2 className="card-title my-3 text-[25px] font-bold text-[#efab31]">
                                     Collection Man
                                  </h2>
                                  <p className='text-gray-600 text-[18px] py-3'>Explore your products and buy now </p>
                                  <div className="card-actions flex  justify-around items-center py-5">
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Fashion</div>
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Products</div>
                                  </div>
                              </div>
                          </div>
            </Link>
                      <Link to={'/categories/woman'}>
                          <div className="card bg-base-100 w-96 rounded-lg transform-all duration-300 hover:scale-105 shadow-xl">
                              <figure>
                                  <img
                                      src={imgWoman}
                                      alt="Shoes" />
                              </figure>
                              <div className="card-body text-center">
                                  <h2 className="card-title my-3 text-[25px] font-bold text-[#efab31]">
                                      Collection Woman
                                  </h2>
                                  <p className='text-gray-600 text-[18px] py-3'>Explore your products and buy now </p>
                                  <div className="card-actions flex  justify-around items-center py-5">
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Fashion</div>
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Products</div>
                                  </div>
                              </div>
                          </div>
                      </Link>
                      <Link to={'/categories/kid'}>
                          <div className="card bg-base-100 w-96 rounded-lg transform-all duration-300 hover:scale-105 shadow-xl">
                              <figure>
                                  <img
                                      src={imgKid}
                                      alt="Shoes" />
                              </figure>
                              <div className="card-body text-center">
                                  <h2 className="card-title my-3 text-[25px] font-bold text-[#efab31]">
                                      Collection Children
                                  </h2>
                                  <p className='text-gray-600 text-[18px] py-3'>Explore your products and buy now </p>
                                  <div className="card-actions flex  justify-around items-center py-5">
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Fashion</div>
                                      <div className="badge badge-outline bg-black shadow-lg text-[#efab31] font-bold py-2 px-6 rounded-full">Products</div>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  
           </div>
            </div>
          
          </div>
    </>
  )
}
