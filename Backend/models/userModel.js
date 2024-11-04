import e from 'express';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: 'https://th.bing.com/th/id/OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3?w=246&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  },
  bio: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, 
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
