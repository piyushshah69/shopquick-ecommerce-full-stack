import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";

function CartContents() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 1800,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 1800,
      image: "https://picsum.photos/200?random=2",
    },
  ]
  return (
    <div>
      {
        cartProducts.map((product, index) => (
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
                  <button className="border border-gray-300 rounded px-1 cursor-pointer text-xl font-medium">
                    <AiOutlineMinus className="w-4 h-6"/>
                  </button>
                  <span className="mx-3">{product.quantity}</span>
                  <button className="border border-gray-300 rounded px-1 cursor-pointer text-xl font-medium">
                    <AiOutlinePlus className="w-4 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>₹ {product.price.toLocaleString()}</p>
              <button>
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