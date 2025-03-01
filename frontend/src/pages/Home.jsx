import React, { useEffect, useState } from "react";
import { handleSuccess } from "../utils";
import HomeNavbar from "../components/HomeNavbar";

function Home() {
  const [activeClient, setActiveClient] = useState();

  useEffect(() => {
    setActiveClient(localStorage.getItem("LoggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("Token");
    handleSuccess("User logged out successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <>
      <HomeNavbar />
      <div className="h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome, {activeClient}</h1>
          <div className="space-y-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => {
                // Add delete account logic here
                alert("Delete account functionality to be implemented");
              }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
