
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LottieHandler from './component/Lottie/LottieHandler';
import Loading from './assets/loading cart.json';
import imgMan from './assets/manBunner.png';
import imgWoman from './assets/womanBunner.png';
import imgKid from './assets/kidBunner.png';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

const Home = React.lazy(() => import('./pages/Home'));
const Category = React.lazy(() => import('./pages/Category'));
const ShopCategory = React.lazy(() => import('./pages/ShopCategory'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const Product = React.lazy(() => import('./component/Product/product'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const Blog = React.lazy(() => import('./pages/Blog'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LottieHandler animationData={Loading} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/man" element={<ShopCategory panner={imgMan} Category="men" />} />
        <Route path="/categories/woman" element={<ShopCategory panner={imgWoman} Category="women" />} />
        <Route path="/categories/kid" element={<ShopCategory panner={imgKid} Category="kid" />} />
        <Route path="/product" element={<Product />} >
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/Products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
