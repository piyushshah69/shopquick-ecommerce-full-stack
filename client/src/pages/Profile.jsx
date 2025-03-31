import { useDispatch, useSelector } from "react-redux";
import MyOrders from "./MyOrders";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col items-start md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:justify-center">

          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md border border-gray-200 rounded-lg p-6">
            <h1 className="text-xl md:text-2xl font-semibold">
              {user?.name}
            </h1>
            <p className="text-md text-gray-600 mb-4 w-full overflow-x-auto py-2">{user?.email}</p>
            <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer">Logout</button>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrders />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile;