import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
function Navbar() {
  
  const [userName, setUserName] = useState(""); // State to store the user's name
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  useEffect(() => {
    const handleMenuToggle = () => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
      
    };

    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", handleMenuToggle);

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
      };
    }
  }, []);

  useEffect(() => {
    // Check if the user is already logged in (e.g., by checking local storage)
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");
    if (token) {
      setUserName(storedUserName);
      setIsLoggedIn(true); // Set login status to true
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication data from local storage or state
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("id");
    setUserName("");
    setIsLoggedIn(false); // Set login status to false
    // Navigate to the login page after logout
    navigate("/login");
  };
 

  return (
    <div>
      <nav className="p-10 ">
        <div className="container  max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
          <h1
            className="text-white lg:text-5xl text-3xl font-semibold transition-transform transform hover:scale-105 duration-300"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Journey Xtreme
          </h1>
         
          <div
            className="hidden md:flex text-lg space-x-8 md:space-x-7"
            style={{ fontFamily: "Young Serif, serif" }}
          >
            <Link
              to="#"
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              Home
            </Link>
            <Link
              to="#Packages"
              smooth
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              Packages
            </Link>
            <Link
              to="#Virtual"
              smooth
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              Virtual Tour
            </Link>
            <Link
              to="#about"
              smooth
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              About Us
            </Link>
            <Link
              to="#Blogs"
              smooth
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              smooth
              className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
            >
              Contact Us
            </Link>
      <div className="relative">
      {isLoggedIn ? (
              // Display "Welcome, UserName" and "Logout" button if user is logged in
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="h-8 w-9 overflow-hidden rounded-full flex items-center justify-center"
                >
                  <BsFillPersonFill size={34} color="white" className="bg-slate-400 p-2 rounded-full " />
                </button>
                {profileOpen && (
                  <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-slate-700 shadow-md">
                    <div className="flex items-center space-x-2 p-2">
                      <div className="font-medium text-xsm text-white">Welcome, {userName}</div>
                    </div>
                    <div className="p-2">
                      <button className="flex items-center space-x-2 transition text-white hover:text-blue-600" onClick={handleLogout}>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        <div>Log Out</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Display "Login" link if user is not logged in
              <Link
                to="/login"
                className="text-white transition-transform transform hover:scale-105 duration-300 hover:underline hover:text-green-400"
              >
                Login
              </Link>
            )}
    </div>
          </div>
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-white p-2 focus:outline-none transition-transform transform hover:scale-105 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="hidden md:hidden"
        style={{ fontFamily: "Young Serif, serif" }}
      >
        <Link
          to="#"
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          Home
        </Link>
        <Link
          to="#Packages"
          smooth
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          Packages
        </Link>

        <Link
          to="#"
          smooth
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          Virtual Tours
        </Link>
        <Link
          to="#about"
          smooth
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          About Us
        </Link>
        <Link
          to="#Blogs"
          smooth
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          Blogs
        </Link>
        <Link
          to="/Contact"
          className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
        >
          Contact Us
        </Link>
        {isLoggedIn && (
          <h1
            onClick={handleLogout}
            className="block p-4 border-t border-gray-300 text-white transition-transform transform hover:scale-105 duration-300"
          >
            Log out
          </h1>
        )}
      </div>
    </div>
  );
}

export default Navbar;
