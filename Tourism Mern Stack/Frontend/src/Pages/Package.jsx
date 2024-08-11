import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Package() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from the API
    fetch("http://localhost:5000/api/package/packages")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data.data.slice(0, 4)); // Slice to show only the first four packages
      })
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);
  // Assuming userId is retrieved from local storage
  const userId = localStorage.getItem("id");
  return (
    <div>
      <div
        id="Packages"
        className="container mx-auto xl:h-screen sm:max-h-fit p-10 mb-10"
      >
        <div className="flex flex-col items-center text-center animate__animated animate__fadeIn p-8 md:flex-row md:justify-between md:text-left">
          <h1 className="text-5xl font-bold md:text-5xl bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text animate-pulse mb-4 md:mb-0 md:mr-4 font-serif">
            Tours Packages
          </h1>

          <h2 className="text-base md:text-xl">
            Discover breathtaking and amazing Pakistan with one of the best
            Travel and Tourism Company of Pakistan. We are offering valued
            touristy plans with complete travel services
            <Link to="/allpacakges">
              <span className="hover:underline px-2 cursor-pointer underline underline-offset-4 text-green-500">
                View all
              </span>
            </Link>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-4 mt-10 lg:gap-2 gap-2 justify-items-center mx-auto container animate__animated animate__fadeInl">
          {packages.map((packageItem) => (
            <div
              key={packageItem._id} // Assuming each package has a unique _id
              className="block w-80 rounded-lg bg-cover shadow animate__animated animate__fadeInLeft"
              style={{ backgroundImage: `url(${packageItem.image})` }}
            >
              <div className="p-6 text-center">
                <h5 className="mb-2 text-3xl font-bold font-medium text-gray-600 animate-bounce">
                  {packageItem.name}
                </h5>
                <hr className="w-32 h-px my-1 ml-16 bg-gray-400 border-0" />
                <p className="mt-5 text-1xl text-gray-600">AS LOW AS</p>
                <p className="text-2xl font-bold text-gray-600">
                  RS. {packageItem.price}
                </p>

                <p className="text-gray-600 text-xl font-semibold">
                  <i
                    className="fa fa-clock-o text-gray-800"
                    style={{ fontSize: "20px" }}
                    aria-hidden="true"
                  ></i>
                  {packageItem.duration} Days
                </p>
                <Link to={`/Booking?packageId=${packageItem._id}&Id=${userId}`}>
                  <button
                    type="button"
                    className="mt-60 text-1xl py-2 text-white bg-gradient-to-r from-green-800 hover:bg-blue-300 px-7 transition-transform transform hover:scale-105 duration-300"
                    style={{ fontFamily: "'Young Serif', serif" }}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
