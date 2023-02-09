import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => {
      console.error('Failed to connect with Mongo');
      console.error(err);
    });
};

export default connectDB;