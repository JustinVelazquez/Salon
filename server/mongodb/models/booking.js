import mongoose from 'mongoose';

const Booking = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  stylist: { type: String, required: false },
});

const BookingSchema = mongoose.model('Booking', Booking);

export default BookingSchema;
