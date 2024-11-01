import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const  UserSchema=new Schema({
  name:{
    type:String,
    minLength:30
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    unique:true,
    required:true
  }
})

const userModel= mongoose.model("user",UserSchema)

export default userModel;