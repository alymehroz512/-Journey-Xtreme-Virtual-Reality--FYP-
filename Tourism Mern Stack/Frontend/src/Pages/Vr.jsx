import React from "react";
import Vrr from "../Images/Vr.jpg";
import { Link } from "react-router-dom";
export default function Vr() {
  return (
    <div>
  <div className="bg-white min-h-screen" id="Virtual">
  <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-28 px-5">
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-300 text-transparent bg-clip-text animate-pulse">
        Virtual Reality Tours
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mt-4">
        Explore Pakistan like never before, one virtual step at a time.
      </h3>
      <p className="text-gray-600 mt-4">
        "Embark on a captivating journey through Pakistan with our VR tours,
        where immersive experiences unfold at every turn. Discover the beauty,
        culture, and rich history of this enchanting country from the comfort of
        your home. Let our virtual tours transport you to iconic landmarks and
        hidden gems, creating memories that resonate long after the adventure
        concludes."
      </p>
      <Link
        to="https://journeyxtreme.netlify.app/"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="mt-8 md:mt-10 text-sm md:text-lg py-2 md:py-3 text-white bg-gradient-to-r from-green-800 hover:bg-green-300 px-4 md:px-7 transition-transform transform hover:scale-105 duration-300"
          style={{ fontFamily: "'Young Serif', serif" }}
        >
          View Tours
        </button>
      </Link>
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 animate__animated animate__slideInLeft">
      <img
        src={Vrr}
        alt="Imagen relacionada con el programa de fidelización"
        className="w-full h-auto md:max-w-full"
      />
    </div>
  </div>
</div>


    </div>
  );
}
