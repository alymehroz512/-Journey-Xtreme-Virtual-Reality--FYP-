import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function Booking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const packageId = queryParams.get('packageId');
  const userId = queryParams.get('Id');
  const [packageName, setPackageName] = useState(""); // State to store the package name
  const [formData, setFormData] = useState({
    
    passengerName: { firstName: "", lastName: "" },
    address: "",
    city: "",
    postalCode: "",
    emailAddress: "",
    phoneNumber: "",
    whatsappNumber: "",
    departureDate: "",
    returnDate: "",
    packageId: packageId,
    userId: userId,
    packageName:packageName
    
  });
  const [errors, setErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Fetch package details when component mounts
    fetchPackageDetails(packageId);
  }, [packageId]);

  // Function to fetch package details
  const fetchPackageDetails = async (packageId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/package/packages/${packageId}`);
      const packageData = response.data.data;
      setPackageName(packageData.name); // Set the package name from the response
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      passengerName: {
        ...formData.passengerName,
        [name]: value,
      },
      packageName: packageName // Include packageName in the formData
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/bookings/bookings', formData);
      // Redirect to payment page or display success message
      setBookingSuccess(true);
    } catch (error) {
      console.error(error); // Handle error
    }
  }

  // Function to validate the form fields
  const validateForm = (data) => {
    let errors = {};
    if (!data.passengerName.firstName.trim() || !data.passengerName.lastName.trim()) {
      errors.passengerName = "Passenger name is required";
    }
    if (!data.address.trim()) {
      errors.address = "Address is required";
    }
    if (!data.city.trim()) {
      errors.city = "City is required";
    }
    if (!data.postalCode.trim()) {
      errors.postalCode = "Postal code is required";
    }
    if (!data.emailAddress.trim()) {
      errors.emailAddress = "Email address is required";
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!data.departureDate.trim()) {
      errors.departureDate = "Departure date is required";
    }
    if (!data.returnDate.trim()) {
      errors.returnDate = "Return date is required";
    }
    
    
    return errors;
  }

  return (
    <>
       <section className="xl:h-screen sm:max-h-fit">
        <div className="container text-center bg-white max-w-screen-xl mt-7 items-center mx-auto p-4">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInRight text-green-400">
            Xtreme-Booking  {packageName && `Booking for Package: ${packageName}`}
          </h1>
          <p className="py-4 text-xl font-semibold">
            
            Amazing Stuff waiting for you and your family / friends you’re just 1 step away from a new
            adventure
          </p>
        </div>

        <div className="container bg-white max-w-screen-xl mt-7 mx-auto p-4">
          <form onSubmit={handleSubmit}>
           
            <div className="flex flex-col">
              <label className="text-2xl">Passenger Name</label>
              <div className="flex">
                <input type="text" name="firstName" placeholder="First Name" value={formData.passengerName.firstName} onChange={handleNameChange} className={`border-2 w-full lg:w-80 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg ${errors.passengerName ? 'border-red-500' : ''}`} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.passengerName.lastName} onChange={handleNameChange} className={`border-2 w-full lg:w-80 ml-4 lg:ml-4 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg ${errors.passengerName ? 'border-red-500' : ''}`} />
              </div>
              {errors.passengerName && <span className="text-red-500">{errors.passengerName}</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-2xl">Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} className={`border-2 border-green-400 hover:border-green-600 p-2 my-1 rounded-lg ${errors.address ? 'border-red-500' : ''}`} cols="10" rows="5"></textarea>
              {errors.address && <span className="text-red-500">{errors.address}</span>}
            </div>
            <div className="flex lg:flex-row flex-col">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className={`border-2 lg:w-80 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg ${errors.city ? 'border-red-500' : ''}`} />
              {errors.city && <span className="text-red-500">{errors.city}</span>}
              <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className={`border-2 lg:w-80 border-green-400 lg:ml-4 hover:border-green-600 py-2 p-1 my-1 rounded-lg ${errors.postalCode ? 'border-red-500' : ''}`} />
              {errors.postalCode && <span className="text-red-500">{errors.postalCode}</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-2xl">Email Address</label>
              <input type="email" name="emailAddress" placeholder="Please Enter Your Email Address" value={formData.emailAddress} onChange={handleChange} className="border-2 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg" />
              {errors.emailAddress && <span className="text-red-500">{errors.emailAddress}</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-2xl">Phone Number</label>
              <div className="flex">
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="border-2 w-full lg:w-80 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg" />
                {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                <input type="text" name="whatsappNumber" placeholder="Whatsapp Number" value={formData.whatsappNumber} onChange={handleChange} className="border-2 w-full lg:w-80 ml-4 lg:ml-4 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg" />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col">
              <div className="flex flex-col">
                <label className="text-2xl">Departure Date</label>
                <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="border-2 lg:w-80 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg" />
                {errors.departureDate && <span className="text-red-500">{errors.departureDate}</span>}
              </div>
              <div className="flex flex-col lg:ml-4">
                <label className="text-2xl">Return Date</label>
                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="border-2 lg:w-80 border-green-400 hover:border-green-600 py-2 p-1 my-1 rounded-lg" />
                {errors.returnDate && <span className="text-red-500">{errors.returnDate}</span>}
              </div>
            </div>
           
            
             {/* Booking section content... */}
        <div className="flex justify-center">
          {/* Booking section content... */}
        {bookingSuccess ? (
          <div className="flex justify-center">
            <p className="text-green-500 text-xl font-semibold">Booking successful!</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 text-2xl text-white shadow-lg rounded-lg mt-3 text-white bg-gradient-to-r from-green-900 via-green-500 to-green-500 hover:bg-green-300"
            >
              Confirm Booking
            </button>
          </div>
        )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
