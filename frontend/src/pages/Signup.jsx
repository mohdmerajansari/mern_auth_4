import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import Navbar from "../components/Navbar";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/clients/clientSignup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess("User signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (error) {
        handleError(error?.details[0].message);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      console.log("Error while sending data to the Server", error.message);
      handleError("Server Side Error");
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-96"
          onSubmit={handleSignup}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Create new account
          </h2>
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-gray-800 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
