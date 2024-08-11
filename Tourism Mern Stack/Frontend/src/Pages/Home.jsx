import React from "react";
import background from "../Images/hero.jpeg";
import Navbar from "../Components/Navbar";
import Package from "./Package";
import Blog from "./Blog";
import Footer from "./Footer";
import Vr from "./Vr";
import About from "./About";

function Home() {
  return (
    <div>
      
      <header
        className="xl:h-screen sm:max-h-fit bg-fixed bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />

        {/* Slogan Section */}
        <div className="container max-w-screen-xl mx-auto xl:mt-20 animate__animated animate__fadeIn">
          <h1
            className="text-9xl italic text-white"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Travel
          </h1>
          <p
            className="ml-32 text-5xl text-white"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Let's Go
          </p>
        </div>
        <div class="container w-80 mt-5 mb-6 max-w-screen-xl xl:ml-32 ml-12 xl:mt-7 animate__animated animate__slideInLeft">
          <p class="text-white font-semibold text-xl">
            Embark on an adventure through breathtaking landscape, immerse in
            vibrant culture, and create lasting memories that transcend
            boundaries
          </p>
        </div>
        <div class="flex justify-end sm:mt-4 mb-6 mr-10 animate__animated animate__fadeInRight">
          <div class="ml-4 mr-2">
            <div class="flex gap-2">
              <h2
                class="text-white text-2xl"
                // style="font-family: 'Young Serif', serif"
              >
                120k +
              </h2>
              <div class="flex items-center -space-x-3">
                <img
                  alt="natali craig"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                  class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                />
                <img
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                />
                <img
                  alt="tania andrew"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxgNLH9mTmdaAn6gz5ftlq7i4eM9PrGzU1mnkjEMOe0xmxLccdpdImdxlKnMZ-d1-5vg&usqp=CAU"
                  class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                />
              </div>
            </div>
            <p class="text-white text-xl">
              There are an estimated 6 million people who travel around the
              world
            </p>
          </div>
        </div>
      </header>

      
      <Package />
      <Vr />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
