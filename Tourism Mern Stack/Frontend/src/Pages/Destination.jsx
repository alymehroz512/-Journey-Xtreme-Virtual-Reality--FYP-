import React from "react";
import { Link } from "react-router-dom";
import mallImage from "../Images/mall.png";
import saifImage from "../Images/saif.jpg";
import badshahiImage from "../Images/badshahi.jpg";
import fairyImage from "../Images/fairy.jpg";

const Destination = () => {
  return (
    <section
      id="Destination"
      className="h-full pb-10 py-10 px-4 bg-gray-200 bg-center bg-fixed"
      style={{ backgroundImage: `url(${mallImage})` }}
    >
      <div className="col-span-12">
        <p className="text-5xl font-bold md:text-5xl bg-gradient-to-r from-green-500 to-green-300 inline-block text-transparent bg-clip-text mb-10 md:mb-0 md:mr-4 font-serif">
          Inspiration for your next trip <br />
          Recommended Places
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 mb-10 py-10">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-4 max-w-xs mx-auto sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${saifImage})` }}></div>
          <div className="m-2 text-justify text-sm">
            <div className="flex justify-between text-base">
              <div className="flex items-center">
                <span className="fa fa-star checked text-yellow-400"></span> &nbsp;
                <p className="text-1xl text-yellow-400">5.0</p>
                &nbsp;
                <p>(300 Reviews)</p>
              </div>
              <p className="text-right font-semibold">Lake</p>
            </div>
            <h2 className="font-bold bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text h-2 mb-8 mt-1 text-2xl text-green-400 text-center">
              Saif ul Malook
            </h2>
            <p className="">
              The most popular one that makes Lake Saif ul Malook famous globally is its famous love story. One of Saif Ul
              Malook s most famous.
            </p>
            <Link to="/Booking" >
            <button type="button" className="flex justify-center text-1xl text-white bg-gradient-to-r from-green-800 hover:bg-green-300 mt-5 font-bold float-right py-2 text-white px-7 transition-transform transform hover:scale-105 duration-300">
            Book Now
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-4 max-w-xs mx-auto sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${badshahiImage})` }}></div>
          <div className="m-2 text-justify text-sm">
            <div className="flex justify-between text-base">
              <div className="flex items-center">
                <span className="fa fa-star checked text-yellow-400"></span> &nbsp;
                <p className="text-1xl text-yellow-400">4.5</p>
                &nbsp;
                <p>(200 Reviews)</p>
              </div>
              <p className="text-right font-semibold">Historical</p>
            </div>
            <h2 className="font-bold h-2 mb-8 mt-1 bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text text-2xl text-green-400 text-center">
              Badshahi Mosque
            </h2>
            <p className="">
              The Badshahi Mosque in Lahore was commissioned by the sixth Mughal Emperor Aurangzeb. Constructed between
              1671 and 1673.
            </p>
            <Link to="/Booking" >
            <button type="button" className="flex justify-center text-1xl text-white bg-gradient-to-r from-green-800 hover:bg-green-300 mt-5 font-bold float-right py-2 text-white px-7 transition-transform transform hover:scale-105 duration-300">
            Book Now
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-4 max-w-xs mx-auto sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${fairyImage})` }}></div>
          <div className="m-2 text-justify text-sm">
            <div className="flex justify-between text-base">
              <div className="flex items-center">
                <span className="fa fa-star checked text-yellow-400"></span> &nbsp;
                <p className="text-1xl text-yellow-400">4.5</p>
                &nbsp;
                <p>(289 Reviews)</p>
              </div>
              <p className="text-right font-semibold">Mountains</p>
            </div>
            <h2 className="font-bold h-2 mb-8 mt-1 bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text text-2xl text-green-400 text-center">
              Fairy Meadow
            </h2>
            <p className="">
              Fairy Meadows is also one of the most accessible locations in all of Pakistan and Gilgit-Baltistan. Lots
              of people visit here throughout.
            </p>
            <Link to="/Booking" >
            <button type="button" className="flex justify-center text-1xl text-white bg-gradient-to-r from-green-800 hover:bg-green-300 mt-5 font-bold float-right py-2 text-white px-7 transition-transform transform hover:scale-105 duration-300">
            Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
