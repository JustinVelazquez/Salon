// const express = require('express');
import express from 'express';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const cors = require('cors');
import cors from 'cors';
import * as dotenv from 'dotenv';

import Booking from './mongodb/models/booking.js';

//DB connection
import connectDB from './mongodb/connect.js';

//dotenv config
dotenv.config();

//calling our instances
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get(`/api/bookings`, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings', err);
    res.status(500).json({ message: 'Error fectching bookings' });
  }
});

app.post(`/api/bookings`, async (req, res) => {
  try {
    const { name, email, date, service, stylist } = req.body;

    const newBooking = await Booking.create({
      name,
      email,
      date,
      service,
      stylist,
    });

    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).json({ message: 'Error saving bookings' });
  }
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
