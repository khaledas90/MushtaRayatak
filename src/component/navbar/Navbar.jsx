import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { useSelector } from "react-redux";
import userImg from "../../assets/user.png";
import { useDispatch } from "react-redux";
import LogOut from "../../store/User";
import toast from "react-hot-toast";
const Navbar = () => {
  const { cartItems, wishlistItems } = useContext(ShopContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.user);

  const handleLogout = () => {

    localStorage.removeItem("users");
    localStorage.removeItem("user");
    toast.success('Logout Successfully', {
      position: 'top-center',
      autoClose: 1000,
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-3">
        <NavLink to="/" className="text-[18px] lg:text-[25px] md:text-[20px] sm:text-[18px] font-bold flex items-center justify-center ">
          <img src={logo} alt="" className="w-[50px]" />   <span >MUSHTA</span><span >RAYATAK</span>
        </NavLink>
        <div className="lg:hidden md:flex flex">
          <div className="flex items-center">
            <span onClick={() => navigate("/wishlist")} className="flex items-center cursor-pointer relative">
              <FaHeart className="hover:text-[#eb423f] transition-all transition-500 text-[21px] pointer mr-2" />
              <span className="absolute top-[-15px] right-0 rounded-full bg-[#eb423f] text-white text-[10px] px-1">{wishlistItems.length}</span>
            </span>
            <span onClick={() => navigate("/cart")} className="flex items-center  cursor-pointer relative">
              <FaCartShopping className="hover:text-[#efab31] transition-all transition-500 text-[21px] pointer mr-2" />
              <span className="absolute top-[-15px] right-0 rounded-full bg-[#efab31] text-white text-[10px] px-1">{cartItems.length}</span>
            </span>
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <nav
          className={`${isOpen ? "block" : "hidden"
            } absolute text-center top-16 left-0 w-full z-30 pb-4 md:absolute md:top-16 md:left-0 md:w-full lg:top-0 bg-white shadow-md lg:relative lg:flex lg:items-center lg:space-x-4 lg:w-auto lg:shadow-none`}
        >
          <NavLink
            to="/"
            className="block px-3 py-2 text-[15px] font-bold text-gray-800 hover:text-[#eb423f] transition-all transition-500 md:text-center"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Products"
            className="block px-3 py-2 text-[15px] font-bold text-gray-800 hover:text-[#eb423f] transition-all transition-500  md:text-center"
            onClick={() => setOpen(false)}
          >
            Product
          </NavLink>
          <NavLink
            to="/categories"
            className="block px-3 py-2 text-[15px] font-bold text-gray-800 hover:text-[#eb423f] transition-all transition-500  md:text-center"
            onClick={() => setOpen(false)}
          >
            Categories
          </NavLink>
          <NavLink
            to="/blog"
            className="block px-3 py-2 text-[15px] font-bold text-gray-800 hover:text-[#eb423f] transition-all transition-500  md:text-center"
            onClick={() => setOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-3 py-2 text-[15px] font-bold text-gray-800 hover:text-[#eb423f] transition-all transition-500  md:text-center"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <div className=" items-center hidden lg:flex md:hidden">
            <span onClick={() => navigate("/wishlist")} className="flex items-center cursor-pointer relative">
              <FaHeart className="hover:text-[#eb423f] transition-all transition-500 text-[21px] pointer mr-2" />
              <span className="absolute top-[-15px] right-0 rounded-full bg-[#eb423f] text-white text-[10px] px-1">{wishlistItems.length}</span>
            </span>
            <span onClick={() => navigate("/cart")} className="flex items-center  cursor-pointer relative">
              <FaCartShopping className="hover:text-[#efab31] transition-all transition-500 text-[21px] pointer mr-2" />
              <span className="absolute top-[-15px] right-0 rounded-full bg-[#efab31] text-white text-[10px] px-1">{cartItems.length}</span>
            </span>
          </div>
          <div className="block px-3 py-2 text-gray-800 hover:text-blue-500 md:text-center">
            {user.user === null ? (
              <Link
                to="/login"
                className="bg-[#efab31] hover:bg-[#eb423f] transition-all duration-500 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            ) : (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1">
                    <img class="w-8 h-8 rounded-full" src={userImg} alt="user photo" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <span onClick={handleLogout} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
                    </li>
                  </ul>
                </div>


              </>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
