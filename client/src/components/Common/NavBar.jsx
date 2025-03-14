import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/shop-quick-logo.png';

function NavBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }
  const toggleCartDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        <div>
          <Link to="/" className="text-2xl font-medium">
            <img className="w-25" src={logo}/>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/collections/all" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            kids
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Women
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Men
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Top Wear
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
          <Link to="/profile">
            <HiOutlineUser className="w-6 h-6 text-gray-700 hover:text-black" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative cursor-pointer text-gray-700">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] rounded-full w-5 h-5 grid place-content-center">14</span>
          </button>
          {/* Search */}
          <SearchBar />
          <button className="md:hidden cursor-pointer" onClick={toggleNavDrawer}>
            <HiBars3BottomRight className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </nav>
      <CartDrawer isDrawerOpen={isDrawerOpen} toggleCartDrawer={toggleCartDrawer} />
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-4 absolute right-0">
          <IoMdClose onClick={toggleNavDrawer} className="w-7 h-7 text-gray-700 cursor-pointer"/>
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-4 font-semibold">Categories</h3>
          <nav className="space-y-4">
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">Kids</Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">Women</Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">Men</Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">Top Wear</Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">Bottom Wear</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar;