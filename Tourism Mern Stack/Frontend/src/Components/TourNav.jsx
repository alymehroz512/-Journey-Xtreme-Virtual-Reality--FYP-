import React from 'react'
import { Link } from 'react-router-dom'
export default function TourNav() {
  return (
    <div>
       <div className="container mx-auto mt-4">
      <nav className="bg-gray-200">
        <div className="container max-w-screen-xl mx-auto p-4">
          <div className="flex flex-wrap items-center">
            <div className="flex text-base md:text-lg space-x-4 md:space-x-8 font-serif">
              <Link
                href="#About"
                smooth
                className="text-black hover-scale hover:underline hover:text-green-400"
              >
                About
              </Link>
              <Link
                to="#Photos"
                smooth
                className="text-black hover-scale hover:underline hover:text-green-400"
              >
                Photos
              </Link>
              <Link
                to="#Details"
                smooth
                className="text-black hover-scale hover:underline hover:text-green-400"
              >
                Details
              </Link>
              <Link
                to="#Map"
                smooth
                className="text-black hover-scale hover:underline hover:text-green-400 flex-md"
              >
                Map
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
