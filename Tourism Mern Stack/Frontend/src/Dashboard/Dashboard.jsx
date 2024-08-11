import React, { useState } from 'react';
import User from './User';
import { Link} from "react-router-dom";
import Packages from './Pacakages';
import Bookings from './Bookings';
import Blogs from './Blogs';
import Header from './Header';


function Sidebar({ onItemClick }) {
  return (
    <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200  bg-gray-900 text-white p-2" style={{ height: '90.5vh' }}>
     
      <Link to="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-800 hover:text-blue-600" onClick={() => onItemClick('users')}>
        <span className="text-2xl"><i className="bx bx-user"></i></span>
        <span>Users</span>
      </Link>
      <Link to="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-800 hover:text-blue-600" onClick={() => onItemClick('tourPackages')}>
        <span className="text-2xl"><i className="bx bx-package"></i></span>
        <span>Tour Packages</span>
      </Link>
      <Link to="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-800 hover:text-blue-600" onClick={() => onItemClick('bookedTours')}>
        <span className="text-2xl"><i className="bx bx-calendar-event"></i></span>
        <span>Booked Tours</span>
      </Link>
      <Link to="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-800 hover:text-blue-600" onClick={() => onItemClick('blogs')}>
        <span className="text-2xl"><i className="bx bx-news"></i></span>
        <span>Blogs</span>
      </Link>
    </aside>
  );
}

  
function MainContent({ activeMenuItem }) {
  // Render content based on the active menu item
  switch (activeMenuItem) {
    
    case 'users':
      return <User />;
    case 'tourPackages':
      return <Packages />;
    case 'bookedTours':
      return <Bookings />;
    case 'blogs':
      return <Blogs />;
    default:
      return null;
  }
}

function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('users');

  return (
    <main className="min-h-screen w-full bg-gray-800 text-white">
      <Header />
      <div className="flex">
        <Sidebar onItemClick={(menuItem) => setActiveMenuItem(menuItem)} />
        <MainContent activeMenuItem={activeMenuItem} />
      </div>
    </main>
  );

}

export default Dashboard;
