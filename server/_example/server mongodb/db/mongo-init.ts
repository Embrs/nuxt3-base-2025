import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(process?.env?.MONGODB_URI || '');
    console.log('mongo connection established');
  } catch (err) {
    console.error('mongo connection failed', err);
  }
};
