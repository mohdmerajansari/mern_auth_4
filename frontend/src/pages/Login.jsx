import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mern-auth-4-api.vercel.app/api/clients/clientLogin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        }
      );
      const result = await response.json();
      const { success, jwtToken, Name } = result;

      if (success) {
        localStorage.setItem("Token", jwtToken);
        localStorage.setItem("LoggedInUser", Name);
        handleSuccess("User logged in successfully");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      console.log("Error while logging in : ", error.message);
      handleError("Server side error");
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Log In to your account
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-black hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
