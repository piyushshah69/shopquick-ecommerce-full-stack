import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

function CartDrawer({ isDrawerOpen, toggleCartDrawer }) {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;
  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate('/login?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  }

  return (
    <div className={`fixed top-0 right-0 w-full sm:w-2/4 xl:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${isDrawerOpen ? "trasnlate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end p-4 absolute right-0">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-7 h-7 text-gray-700 hover:text-gray-800 cursor-pointer"/>
        </button>
      </div>
      <div
        className="flex-grow p-4 overflow-y-auto"
      >
        <h2 className="text-xl mb-4 font-semibold">Shopping Cart</h2>
        {cart && cart?.products?.length > 0 ? (<CartContents cart={cart} userId = {userId} guestId = {guestId} />):(<p>Your Cart is empty!</p>)}
      </div>
      <div className="p-4 bg-white sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
          <>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer" onClick={handleCheckout}>Checkout</button>
            <p className="text-sm tracking-tight text-gray-500 mt-2 text-center">Shipping, taxes & discount codes will be calculated at checkout.</p>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDrawer;