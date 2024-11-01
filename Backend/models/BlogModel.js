import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const blogSchema=new Schema({
  title:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    default: 'https://th.bing.com/th/id/OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3?w=246&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  },
  content:{
    type:String,
    required:true,
  },
  createdby:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
})

const blogModel=mongoose.model("blog",blogSchema);

export default blogModel;