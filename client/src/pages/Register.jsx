import { useEffect, useState } from "react";
import shopQuickLogo from "../assets/shop-quick-logo.png"
import registerImage from "../assets/login.webp"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get redirect parameter and check if it is checkout or else
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        })
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }))
  }

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow" onSubmit={(e) => handleRegister(e)}>
          <div className="flex justify-center mb-6">
            <img src={shopQuickLogo} className="w-24" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide text-center mb-2">Hey there! 👋🏻</h2>
          <p className="text-center mb-6">Enter your name, username & password to Register</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer">{loading ? "Loading..." : "Register"}</button>
          <p className="mt-4 text-center text-sm">Don't have an account? <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className="text-blue-500">Login now</Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={registerImage} alt="login image"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Register;