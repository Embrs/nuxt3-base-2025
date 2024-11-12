import mongoose from 'mongoose';

// 建立 Schema
const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  }
}, {
  versionKey: false
});

// 建立 Model
const user = mongoose.model('users', userSchema);

export default user;
