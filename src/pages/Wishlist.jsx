import React, { useContext } from 'react'
import HeadProductDetails from '../component/headProductDetails/headProductDetails'
import Items from '../component/items/items'
import { ShopContext } from '../context/ShopContext';
import LottieHandler from '../component/Lottie/LottieHandler';
import data from '../assets/empty Wishlist.json'
export default function Wishlist() {
    const { wishlistItems } = useContext(ShopContext);
    return (
        <>
            <div className="Wishlist">
                <HeadProductDetails title={"Wishlist"} />
                <div className="container mx-auto px-7">
                    <div className={`grid ${wishlistItems.length > 0 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : ''} gap-4`}>
                        {wishlistItems.length > 0 ? wishlistItems.map((item) => (

                            <Items
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                NewPrice={item.new_price}
                                OldPrice={item.old_price}
                                offer={(item.id === 2 || item.id === 4) ? '20% OFF' : undefined}
                                isOffer={(item.id === 2 || item.id === 4)}
                            />

                        )) : (
                            <div className="text-center grid place-items-center py-10">

                                <LottieHandler animationData={data} message="Your wishlist is empty" />

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
