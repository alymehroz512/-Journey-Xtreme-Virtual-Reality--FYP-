import React from "react";
import about from "../Images/about.mp4";
const AboutUs = () => {
  return (
    <section className=" bg-gray-700" id="about">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-8">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold md:text-5xl bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text  mb-4 md:mb-0 md:mr-4 font-serif">
              About Us
            </h1>
            <p className="mt-4 text-white text-lg">
              Welcome to Journey Xtreme, where we believe that travel is more
              than just visiting places; it's about experiencing the world in
              new and extraordinary ways. At Journey Xtreme, we are passionate
              about revolutionizing the way people explore and connect with
              destinations across the globe.
            </p>
            <h1 className="text-2xl mt-4 font-semibold bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text font-serif">
              Our Mission
            </h1>
            <p className="mt-4 text-white text-lg ">
              Our mission at Journey Xtreme is to empower travelers to embark on
              unforgettable journeys filled with discovery, adventure, and
              personal growth.<br/>
              Explore destinations around the world from the comfort of your own home with our high-quality VR tours, providing an immersive glimpse into iconic landmarks, hidden gems, and cultural wonders.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <video controls className="object-cover rounded-lg shadow-md">
              <source src={about} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
