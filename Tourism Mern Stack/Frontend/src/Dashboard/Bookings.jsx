import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/bookings/bookings');
          setBookings(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
  
      fetchBookings();
    }, []);
  
    const renderBookingsTable = () => {
      if (loading) {
        return <p>Loading...</p>;
      } else if (bookings.length === 0) {
        return <p>No bookings available</p>;
      } else {
        return (
          <table className="min-w-full">
    <thead className="bg-gray-800 text-m text-white">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium">Booking ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium">User Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium">Package Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium">Departure Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium">Return Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium">Address</th>
        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody className="bg-slate-700 divide-y divide-gray-200">
      {bookings.map((booking) => (
        <tr key={booking._id}>
          <td className="px-6 py-4 whitespace-nowrap">{booking._id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{booking.emailAddress}</td>
          <td className="px-6 py-4 whitespace-nowrap">{booking.packageName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.departureDate).toLocaleDateString()}</td>
          <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.returnDate).toLocaleDateString()}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {booking.address}, {booking.city}, {booking.postalCode}
            {/* Add more address details here */}
          </td>
          {/* Add more table cells for additional booking details */}
        </tr>
      ))}
    </tbody>
  </table>
        );
      }
    };
  
    return (
      <div className="w-full p-4">
        <h2 className="text-lg font-semibold mb-4">Booked Tours Content</h2>
        {renderBookingsTable()}
      </div>
    );
  }
export default Bookings;