import express from "express";

import blogModel from '../models/BlogModel.js';
const blogRoute= express.Router();

blogRoute.post("/createblog",async (req,res)=>{
  const {title,image,content,createdby}=req.body;
  const blogs= blogModel({
    title,
    image,
    content,
    createdby
  })

  const createdblogs= await blogs.save();
  res.send(createdblogs);
})

export default blogRoute;
