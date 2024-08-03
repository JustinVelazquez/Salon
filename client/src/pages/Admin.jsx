// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings', {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        });
        const data = await response.json();

       setBookings(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchBookings();
  }, []);
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
  
    {bookings.map((booking) =>(
      <li key={booking._id}>{booking.name} - {booking.email} - { new Date(booking.date).toLocaleDateString()} - {booking.service} - {booking.stylist}</li>
    ))}
      </ul>

    </div>
  );
};

export default Admin;
