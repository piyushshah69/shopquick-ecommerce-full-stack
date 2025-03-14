import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "123",
          createdAt: new Date(),
          shippingAddress: { city: "Indore", state: "Madhya Pradesh", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500?random=1",
            },
          ],
          totalPrice: 4000,
          isPaid: false,
        },
        {
          _id: "123456",
          createdAt: new Date(),
          shippingAddress: { city: "Indore", state: "Madhya Pradesh", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500?random=1",
            },
          ],
          totalPrice: 4000,
          isPaid: true,
        },
        {
          _id: "123456789",
          createdAt: new Date(),
          shippingAddress: { city: "Indore", state: "Madhya Pradesh", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500?random=1",
            },
          ],
          totalPrice: 4000,
          isPaid: true,
        }
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (id) => {
    navigate(`/order/${id}`)
  }

  return (
    <div className="max-w-7xl mx-auto sm:p-6">
      <h2 className="tet-xl sm:text-2xl font-semibold mb-6">
        My Orders
      </h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order Id</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => {
                return <tr key={order._id} onClick={()=>handleRowClick(order._id)} className="border-b border-gray-300 hover:border-gray-400 cursor-pointer">
                  <td className="p-2 sm:p-4">
                    <img src={order.orderItems[0].image} alt={order.orderItems[0].name} 
                      className="w-10 h-10 sm:w-12 sm:h-12  object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:p-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                    {" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="p-2 sm:p-4">
                    {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.state}, ${order.shippingAddress.country},` : "N/A"}
                  </td>
                  <td className="p-2 sm:p-4">
                    {order.orderItems.length}
                  </td>
                  <td className="p-2 sm:p-4">
                    ₹{order.totalPrice}
                  </td>
                  <td className="p-2 sm:p-4">
                    <span className={`p-1 rounded text-xs sm:text-sm ${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              })
            ) : (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">
                    You have no orders
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders