import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import { services, stylists } from '../constants/index.js';

const Booking = () => {
  const [date, setDate] = useState(new Date());

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    stylist: '',
    date: date,
  });

  useEffect(() => {
    setForm({ ...form, date: date });
  }, [date]);


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
        body: JSON.stringify(form),
      });
      await response.json();
      if (response.ok) {
        alert(
          `Booking for ${
            form.name
          } on ${form.date.toLocaleDateString()} was successful. We will send an email to ${
            form.email
          } with available times`
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
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
            value={form.service}
            required
            onChange={(e) => setForm({ ...form, service: e.target.value })}
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
            value={form.stylist}
            onChange={(e) => setForm({ ...form, stylist: e.target.value })}
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
