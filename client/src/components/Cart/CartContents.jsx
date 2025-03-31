import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../redux/slices/cartSlice";

function CartContents({ cart, userId, guestId }) {
  const dispatch = useDispatch();

  // Handle adding or substracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(updateCartItemQuantity({
        productId,
        quantity: newQuantity,
        guestId,
        userId,
        size,
        color,
      }))
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  }

  return (
    <div>
      {
        cart.products.map((product, index) => (
          <div
            key={index}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-start">
              <img src={product.image} alt={product.name} 
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Size: {product.size} | Color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border border-gray-300 rounded px-1 cursor-pointer text-xl font-medium" onClick={() => handleAddToCart(
                    product.productId,
                    -1,
                    product.quantity,
                    product.size,
                    product.color
                  )}>
                    <AiOutlineMinus className="w-4 h-6"/>
                  </button>
                  <span className="mx-3">{product.quantity}</span>
                  <button className="border border-gray-300 rounded px-1 cursor-pointer text-xl font-medium" onClick={() => handleAddToCart(
                    product.productId,
                    1,
                    product.quantity,
                    product.size,
                    product.color
                  )}>
                    <AiOutlinePlus className="w-4 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>$ {product.price.toLocaleString()}</p>
              <button onClick={() => handleRemoveFromCart(
                product.productId,
                product.size,
                product.color
              )}>
                <RiDeleteBin3Line className="w-6 h-6 mt-2 text-error" />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartContents;