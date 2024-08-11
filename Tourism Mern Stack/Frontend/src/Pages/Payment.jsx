import React from 'react';

const Payment = () => {
  return (
    <section className="xl:h-screen sm:max-h-fit">
      <div className="container text-center bg-white max-w-screen-xl mt-7 items-center mx-auto p-4">
        <h1 className="text-5xl font-bold animate__animated animate__fadeInRight text-green-400">
          Payment
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white max-w-screen-xl mt-7 mx-auto p-4 ">
        {/* Form */}
        <div className="border-2 border-gray-400 p-4 ">
          <form action="" className="flex flex-col">
            <label className="text-2xl">Name of Card</label>
            <input
              type="text"
              name=""
              className="border-2 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg"
              placeholder="Enter Your Name"
              id=""
            />
            <label className="text-2xl">Card Number</label>
            <input
              type="text"
              name=""
              className="border-2 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg"
              placeholder="0000-0000-0000-0000"
              id=""
            />
            <label className="text-2xl">Expiry Date</label>
            <input
              type="date"
              name=""
              className="border-2 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg"
              id=""
            />
            <label className="text-2xl">CVV</label>
            <div>
              <input
                type="text"
                name=""
                className="border-2 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg"
                id=""
              />
            </div>
          </form>
        </div>
        {/* Tour Detail */}
        <div className="flex flex-col justify-center text-center items-center">
          <div className="border-2 border-gray-400 p-4 w-80">
            <h1 className="text-2xl text-center font-semibold">Tour Details</h1>
            <hr className="h-px bg-black border-2" />
            <div className="container mx-auto my-4">
              <h1 className="text-2xl text-green-400 font-bold my-2">Murree Tour</h1>
              <p className="text-gray-500">Total Payment</p>
              <p className="font-semibold">RS 34,000 /-</p>
              <p className="my-2 text-gray-500">Departure Date</p>
              <p className="font-semibold">November 12, 2023 | 11:00 am</p>
              <hr />
              <p className="my-2 text-gray-500">Arrival Date</p>
              <p className="font-semibold">November 20, 2023 | 11:00 am</p>
            </div>
          </div>
          <button
            type="submit"
            className="text-white text-2xl p-2 my-2 w-60 text-center bg-gradient-to-r from-green-900 via-green-500 to-green-500 transform transition-transform duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
