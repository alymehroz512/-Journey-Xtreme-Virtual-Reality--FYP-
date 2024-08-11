import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
function Header() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [asideOpen, setAsideOpen] = useState(true);
    const navigate=useNavigate();
   
    const storedUserName = localStorage.getItem("userName");
    const handleLogout = () => {
      // Clear authentication data from local storage or state
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      
      // Navigate to the login page after logout
      navigate("/login");
    };
   
    return (
  
      
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-gray-900 text-white p-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-5xl"
            onClick={() => setAsideOpen(!asideOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>
          <div className='text-2xl font-semibold'>Journey Xtreme Dashboard</div>
        </div>
  
        {/* Button profile */}
        <div>
        <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            onClickOutside={() => setProfileOpen(false)}
            className="h-9 w-9 overflow-hidden rounded-full flex items-center justify-center" // Added flex and justify-center classes
          >
            <BsFillPersonFill size={24} /> {/* Render the user icon */}
          </button>
  
          {/* Dropdown profile */}
          {profileOpen && (
            <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-black shadow-md">
               <div className="flex items-center space-x-2 p-2">
                <div className="font-medium">{storedUserName}</div>
              </div>
              <div className="p-2">
                <button className="flex items-center space-x-2 transition hover:text-blue-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  <div onClick={handleLogout}>Log Out</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
export default Header;