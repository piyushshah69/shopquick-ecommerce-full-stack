import { TbBrandInstagram, TbBrandMeta, TbBrandX } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 lg:px-0 mt-2">
        <div className="col-span-2">
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events & online offers.
          </p>
          <p className="font-medium text-sm text-gray-500 mb-6">
            Sign up & get 10% OFF on your first order.
          </p>
          <form className="flex">
            <input type="email" placeholder="Enter your email" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 ring-gray-500 transition-all" required />
            <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Subscribe</button>
          </form>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Men's Top Wear</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Women's Top Wear</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Men's Bottom Wear</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Women's Bottom Wear</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Contact us</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">About us</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">FAQ's</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Let's go social</h3>
          <div className="flex items-center space-x-2 mb-6">
            <a href="https://www.instagram.com" target="_blank">
              <TbBrandInstagram className="w-6 h-6 text-red-600" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <TbBrandMeta className="w-6 h-6 text-blue-600"/>
            </a>
            <a href="https://www.x.com" target="_blank">
              <TbBrandX className="w-5 h-5 text-black"/>
            </a>
          </div>
          <p className="text-lg text-gray-800 mb-4">Connect on call</p>
          <p className="text-gray-600">
            <FiPhoneCall className="inline-block mr-2 w-5 h-5" />
            +91-9876543210
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">© 2025 ShopQuick. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;