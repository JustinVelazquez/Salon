import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import { services, stylists } from '../constants/index.js';

const Booking = () => {
  const [name, setName] = useState('value');
  const [email, setEmail] = useState('email');
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, date, service, stylist }),
      });
      await response.json();
      if (response.ok) {
        alert(
          `Booking for ${name} on ${date.toLocaleString()} was successful. We will send an email to ${email} with available times`
        );
        navigate('/');
      } else {
        alert('Booking failed. Please try again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Date:</label>
          <Calendar onChange={setDate} value={date} required />
          <p>Selected Date: {date.toLocaleDateString()}</p>
        </div>
        <div>
          <label htmlFor="services">Services</label>
          <select
            type="text"
            id="service"
            value={service}
            required
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <label htmlFor="stylists">Stylists</label>
          <select
            type="text"
            id="stylist"
            value={stylist}
            onChange={(e) => setStylist(e.target.value)}
          >
            <option value="" disabled>
              Select a stylist (optional)
            </option>
            {stylists.map((stylist, index) => (
              <option key={index} value={stylist}>
                {stylist}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Booking;
