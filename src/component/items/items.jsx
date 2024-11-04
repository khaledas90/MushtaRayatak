import React, { useContext, useEffect, useState } from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ShopContext } from '../../context/ShopContext';
import ReactStars from 'react-rating-stars-component';
export default function Items({ id, name, NewPrice, OldPrice, image, offer, isOffer }) {
  const [restaurantRating, setRestaurantRating] = useState(0);
  const { addToWishlist, addToCart, removeFromWishlist, wishlistItems } = useContext(ShopContext);
  const [showHeart, setShowHeart] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return savedWishlist.some(item => item.id === id);
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);


  const handleAddToCart = () => {
    addToCart(id);

  };

  const handleAddToWishlist = () => {
    addToWishlist(id);
    setShowHeart(true)

  };

  const handleRemoveToWishlist = () => {
    removeFromWishlist(id)
    setShowHeart(false)
  }

  const ratingChanged = (newRating) => {
    setRestaurantRating(newRating);
  };
  return (
    <>
      <div className="items lg:w-full md:w-full w-auto m-auto py-5 " id={id}>


        <div class="relative  flex w-full max-w-xs flex-col   overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">

          <span class="relative h-auto  mx-3 mt-3 flex items-center overflow-hidden rounded-xl" >
            <img class="object-cover" src={image} alt="product image" />
            {isOffer && <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{offer}</span>}
            {showHeart ? (
              <span className="absolute top-0 right-0 m-2 rounded-full px-2 text-center text-[29px] cursor-pointer font-medium text-white hover:text-red-600 transition-all duration-300" onClick={handleRemoveToWishlist}>
                <IoMdHeart className='text-red-600' />
              </span>
            ) : (
              <span className="absolute top-0 right-0 m-2 rounded-full px-2 text-center text-[29px] cursor-pointer font-medium text-white hover:text-red-600 transition-all duration-300" onClick={handleAddToWishlist}>
                <IoHeartOutline />
              </span>
            )}


          </span>


          <div class="mt-4 px-5 pb-5">
            <Link to={`/product/${id}`}>
              <span >
                <h5 class="text-xl tracking-tight text-slate-900">{name}</h5>
              </span>
            </Link>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-slate-900">${NewPrice}</span>
                  {isOffer && <span class="text-sm text-slate-900 line-through">${OldPrice}</span>}
                </p>

                <div class="flex items-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    isHalf={true}
                    
                    emptyIcon={<i className="far fa-star text-[7px]"></i>}
                  halfIcon={<i className="fas fa-star-half-alt text-[7px]"></i>}
                  fullIcon={<i className="fas fa-star text-[7px]"></i>}
                    activeColor="#ffd700"
                    value={restaurantRating}
                  />
                  <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{restaurantRating || 0}</span>
                </div>
              </div>
           
            <span onClick={handleAddToCart} class="flex items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">

              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </span>

          </div>
        </div>
        <Toaster />
      </div >
    </>
  )
}
