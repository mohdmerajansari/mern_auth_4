import React from "react";
import { TbSquareLetterMFilled } from "react-icons/tb";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-black shadow-lg w-full fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="text-white text-xl font-bold flex items-center"
              >
                <span className="flex items-center">
                  <TbSquareLetterMFilled
                    className="ml-1"
                    style={{ marginRight: "5px", height: "100px" }}
                  />{" "}
                  Meraj{" "}
                  <span
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "2px",
                      marginLeft: "5px",
                    }}
                  >
                    Authenticaion
                  </span>
                </span>
              </a>
            </div>
            {/* Navigation links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/about"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="/login"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="hover:text-white hover:bg-blue-600 text-gray-300 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-button p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 w-full bg-black z-10 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="/about"
          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600"
        >
          About
        </a>
        <a
          href="/contact"
          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600"
        >
          Contact
        </a>
        <a
          href="/login"
          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600"
        >
          Login
        </a>
        <a
          href="/signup"
          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600"
        >
          Sign Up
        </a>
      </div>
      {/* Add padding to push content below navbar */}
      <div className="pt-16"></div>
    </>
  );
}

export default Navbar;
