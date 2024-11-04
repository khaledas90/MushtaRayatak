import React, { createContext, useEffect } from "react";
import allProduct from "../assets/all_product";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [wishlistItems, setWishlistItems] = React.useState(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    })
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [cartItems, wishlistItems]);

    const addToCart = (itemId, quantity = 1) => {
        const existingItem = cartItems.find(item => item.id === itemId);

        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > 4) {
                toast.error('You can\'t have more than 4  in the cart', {
                    position: 'top-center',
                    autoClose: 1000,
                });
            } else {
                setCartItems(cartItems.map(item =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                ));
                toast.success('product added to cart', {
                    position: 'top-center',
                    autoClose: 1000,
                });
            }
        } else {
            const cartItem = allProduct.find(item => item.id === itemId);
            if (cartItem && quantity > 0) {
                if (quantity > 4) {
                    toast.error('You can\'t have more than 4  in the cart', {
                        position: 'top-center',
                        autoClose: 1000,
                    });
                } else {
                    setCartItems([...cartItems, { ...cartItem, quantity }]);
                    toast.success('product added to cart', {
                        position: 'top-center',
                        autoClose: 1000,
                    });
                }
            }
        }
    };

    const removeFromCart = (itemId) => {
        const newCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCartItems);
        toast.success('product removed from cart', {
            position: 'top-center',
            autoClose: 1000,
        });
    };


    const increaseQuantity = (itemId) => {
        const existingItem = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })

        setCartItems(existingItem);
    }

    const decreaseQuantity = (itemId) => {
        const existingItem = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })

        setCartItems(existingItem);
    }
    const addToWishlist = (itemId) => {
        const wishlistItem = allProduct.find(item => item.id === itemId);
        const isItemInWishlist = wishlistItems.some(item => item.id === itemId);

        if (wishlistItem) {
            if (!isItemInWishlist) {
                setWishlistItems([...wishlistItems, { ...wishlistItem, isFave: true }]);
                toast.success('Product added to wishlist', {
                    position: 'top-center',
                    autoClose: 1000,
                });
                console.log(wishlistItems); 
                
            } else {
                toast.error('Product already in wishlist', {
                    position: 'top-center',
                    autoClose: 1000,
                });
            }
        }
    };

    const removeFromWishlist = (itemId) => {

        const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);

        setWishlistItems(updatedWishlist);

        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        toast.success('Product removed from wishlist', {
            position: 'top-center',
            autoClose: 1000,
        });
    };


    const value = {
        allProduct,
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
