import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log('connected to DB'))
    .catch((err) => {
      console.log('failed to connect');
      console.log(err);
    });
};


export default connectDB