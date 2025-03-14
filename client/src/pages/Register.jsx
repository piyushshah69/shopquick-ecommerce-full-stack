import { useState } from "react";
import shopQuickLogo from "../assets/shop-quick-logo.png"
import registerImage from "../assets/login.webp"
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, email, password});
  }

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow">
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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
          onClick={(e)=>handleSubmit(e)}>Register</button>
          <p className="mt-4 text-center text-sm">Don't have an account? <Link to='/login' className="text-blue-500">Login now</Link>
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