import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <div>
      <section className="bg-black opacity-90 text-white py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 xl:gap-48 gap-6">
            <div className="mb-4 ml-12 mr-4">
              <h2
                href="#"
                className="text-white text-5xl mb-4 font-semibold transition-transform transform hover:scale-105 duration-300"
              >
                Journey Xtreme
              </h2>
              <p>
                "Explore the extraordinary with Journey Xtreme! Our website
                offers a unique blend of exhilarating physical tours and
                immersive VR experiences. Discover thrilling destinations
                through our traditional guided tours or dive into a virtual
                adventure with our cutting-edge VR tours. Whether you seek the
                adrenaline of real-world exploration or the convenience of
                virtual travel, Journey Xtreme provides unforgettable journeys
                for every explorer."
              </p>
              {/* Whatsapp */}
              <div className="flex p-4">
                <img
                  src="https://i.pinimg.com/736x/cb/bf/c7/cbbfc7f9d8cd2d8a70f4be570f177616.jpg"
                  className="w-10"
                  alt=""
                />
                <div className="flex flex-col">
                  <p>Whatsapp</p>
                  <p>+92 333 8756315</p>
                </div>
              </div>
              {/* social links */}
              <div className="flex">
                <img
                  src="https://i.pinimg.com/originals/e3/8f/af/e38fafda2ddb4d5ba66b96a0398b9b5f.png"
                  className="w-10 cursor-pointer"
                  alt=""
                />
                <img
                  src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg"
                  className="w-12 pb-1 cursor-pointer"
                  alt=""
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZE04GAOT6LgF5lVla1uWH3ayJ8zGBKlIE1A&usqp=CAU"
                  className="w-6 h-6 mt-2 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
            <div className="flex xl:ml-80  ml-4">
              {/* links */}
              <div className="flex flex-col p-10">
                <div>
                  <Link
                    to="#"
                    smooth
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="#Packages"
                    smooth
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    Packages
                  </Link>
                  <Link
                    to="#Virtual"
                    smooth
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    Vitual Tours
                  </Link>
                  <Link
                    to="#about"
                    smooth
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="#Blogs"
                    smooth
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/Contact"
                    className="block text-white transition-transform transform hover:scale-105 duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* Contact Info */}
              {/* <div className="mb-4 ml-12 mr-2">
                <h4 className="text-xl font-semibold mb-2">Get in Touch</h4>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email "
                    className="w-full border border-gray-100 bg-black pl-10 pr-4 py-1 focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                  <i className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 fa fa-envelope"></i>
                </div>
                <button
                  type="submit"
                  className="bg-white text-black py-1 mt-2 float-right font-semibold rounded-lg w-24 transition-transform transform hover:scale-105 duration-300"
                >
                  Send
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-black">
        <div className="block text-center">
          &copy;2024 All rights reserved
          <span className="text-green-700 font-bold">Journey Xtreme</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
