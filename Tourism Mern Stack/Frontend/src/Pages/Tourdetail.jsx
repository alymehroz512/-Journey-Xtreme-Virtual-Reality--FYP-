import React from 'react'
import map from '../Images/map.PNG'
import TourNav from '../Components/TourNav'
import Footer from './Footer'

export default function Tourdetail() {
  return (
    <>
    
       <div className="container mx-auto">
      <div className="ml-4 md:ml-12">
        {/* Margin adjustments for responsiveness */}
        <h1 className="text-2xl md:text-3xl font-bold">Murree-3 Days</h1>
        {/* Font size adjustments for responsiveness */}
        <div className="flex items-center flex-wrap">
          {/* Allow items to wrap on smaller screens */}
          <span className="fa fa-star checked text-yellow-400"></span>
          <span className="fa fa-star checked text-yellow-400"></span>
          <span className="fa fa-star checked text-yellow-400"></span>
          <span className="fa fa-star checked text-yellow-400"></span>
          <span className="fa fa-star checked text-yellow-400"></span>
          <h1 className="underline ml-2 md:ml-4">19 Reviews</h1>
          {/* Margin adjustments for responsiveness */}
          <i className="fa fa-check-circle mt-2 md:mt-0 ml-4 md:ml-20 text-green-600 text-sm">
            Recommended by 100% Travellers
          </i>
          {/* Margin adjustments for responsiveness */}
        </div>
      </div>
    </div>

   <TourNav/>

    <div className="container" id="About">
      <div className="container mx-auto px-5 flex lg:flex-row flex-col py-2 lg:px-32 lg:pt-24">
        <div>
          <p className="font-semibold text-2xl">About</p>
          <p className="text-xg">
            It is a charming hill station that has been attracting visitors for centuries. Known for its breathtaking scenery, fresh mountain air, and serene atmosphere, Murree has a special place in the hearts of Pakistanis and tourists alike. It is a charming hill station that has been attracting visitors for centuries. Known for its breathtaking scenery, fresh mountain air, and serene atmosphere
          </p>
          <p className="p-4 font-bold">RS 8,500 per Person</p>
          <ul className="flex space-x-10" style={{ listStyleType: 'disc' }}>
            <li>Lowest price guarantee</li>
            <li>Fee cancellation</li>
          </ul>
          <hr className="h-px bg-black mt-2 w-96 mb-1 border-2" />
          <p><i className="fa fa-users text-green-400"></i> Age 2-70, maximum 10 members per group</p>
          <p><i className="fa fa-clock-o text-green-400"></i> Duration: 3 days</p>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <div className="border-2 border-gray-400 p-4 w-80">
            <div className="text-white bg-gradient-to-r from-green-900 via-green-500 to-green-500">
              <p>As Low As</p>
              <h1 className="text-2xl font-semibold">RS 8,500</h1>
            </div>
            <hr className="h-px bg-black mt-2 border-2" />
            <div className="container mx-auto my-4">
              <h1 className="text-2xl text-green-400 font-bold my-2">Murree Tour</h1>
              <i className="fa fa-calendar text-green-400"> Availability : August 1 - March 30 </i>
              <p className="font-semibold text-green-400"><i className="fa fa-user text-green-400"></i>124 successful travelers</p>
            </div>
          </div>
          <button type="submit" className="block border-t border-gray-300 text-white text-xl p-2 my-2 w-42 text-center bg-gradient-to-r from-green-900 via-green-500 to-green-500 transition-transform transform hover:scale-105 duration-300">Book Now</button>
        </div>
      </div>
    </div>

    {/* gallery */}
    <section className="container" id="Photos">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <p className="text-2xl font-semibold mb-4">Photos</p>
        <div className="grid lg:grid-cols-2 gap-3 grid-cols-2">
          <div className="p-1 md:p-2 lg:w-1/2">
            <img
              alt="gallery"
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://kundmalir.com/wp-content/uploads/2020/09/patriata1.jpg"
            />
          </div>
          <div className="p-1 md:p-2 lg:w-1/2">
            <img
              alt="gallery"
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://t3.ftcdn.net/jpg/04/47/48/80/360_F_447488089_z6zoMws9Mq8kFpgM4noLtYTX1AUS5TMy.jpg"
            />
          </div>
          <div className="p-1 md:p-2 lg:w-1/2">
            <img
              alt="gallery"
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/564x/20/81/1f/20811f9b1241b071755b8c7bea705c36.jpg"
            />
          </div>
          <div className="p-1 md:p-2 lg:w-1/2">
            <img
              alt="gallery"
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://c4.wallpaperflare.com/wallpaper/25/320/981/landscape-nature-mountains-snow-wallpaper-thumb.jpg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Details */}
    <section className="container mx-auto mt-4 mb-4 p-10" id="Details">
      <div className="lg:ml-12 ml-1">
        <p className="text-2xl font-semibold">Details</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg text-center font-semibold text-green-400">Price include</h2>
            <p><i className="fa fa-check text-blue-600 mt-4"></i> Complete Tour Management with dedicated Guide</p>
            <p><i className="fa fa-check text-blue-600"></i> Travel on dedicated Transport (Hiace)</p>
            <p><i className="fa fa-check text-blue-600"></i> Accommodation</p>
            <p><i className="fa fa-check text-blue-600"></i> Quality Food Serving (3 Meals per day)</p>
            <p><i className="fa fa-check text-blue-600"></i> Refreshments during Travel</p>
            <p><i className="fa fa-check text-blue-600"></i> All Toll and Taxes included</p>
            <p><i className="fa fa-check text-blue-600"></i> Hassle Free Trip</p>
          </div>
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg text-center font-semibold text-green-400">Price Excludes</h2>
            <p><i className="fa fa-close text-red-600 mt-4"></i> Porters (for carrying personal equipment of participant)</p>
            <p><i className="fa fa-close text-red-600"></i> Extra expenses due to landslides and road blocks</p>
            <p><i className="fa fa-close text-red-600"></i> Extra expenses due to the acts of nature and political reasons etc.</p>
            <p><i className="fa fa-close text-red-600"></i> Medication, evacuation and rescue etc. in emergencies</p>
            <p><i className="fa fa-close text-red-600"></i> Personal insurances of clients</p>
            <p><i className="fa fa-close text-red-600"></i> Laundry & phone calls or other personal expense</p>
            <p><i className="fa fa-close text-red-600"></i> Any item not mentioned above</p>
          </div>
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg text-center font-semibold text-green-400">Complementries</h2>
            <p><i className="fa fa-circle mt-4"></i> Complimentary Mineral Water during travel</p>
            <p><i className="fa fa-circle"></i> Complimentary Snacks during travel</p>
            <p><i className="fa fa-circle"></i> Complimentary Cold Drinks during travel</p>
          </div>
        </div>
      </div>
    </section>
    {/* Map */}
    <section className="container h-screen" id="Map">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <p className="text-2xl font-semibold mb-4">Map</p>
        <div>
          <img src={map} className="rounded-lg" alt="" />
        </div>
      </div>
    </section>

   <Footer/>

   
    </>
  )
}
